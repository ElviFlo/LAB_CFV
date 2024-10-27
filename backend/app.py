from flask import Flask, jsonify, request
from sqlalchemy import create_engine, text
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Para permitir que el frontend haga peticiones a la API

# Conexión a la base de datos
engine = create_engine('postgresql://postgres:cont@localhost:5432/Archivo')  # Cambia 'tu_contraseña' por tu contraseña

@app.route('/api/flights_data', methods=['GET'])
def get_flights_data():
    with engine.connect() as connection:
        query = text("SELECT * FROM flights LIMIT 5000")
        result = connection.execute(query).mappings()
        data = [dict(row) for row in result]
    return jsonify(data)

@app.route('/api/months_Delay', methods=['GET'])
def get_months_Delay():
    with engine.connect() as connection:
        query = text("""Select month, AVG(dep_delay) Despegue ,AVG (arr_delay) aterrizaje
                        from flights
                        group by month""")
        result = connection.execute(query).mappings()
        data = [dict(row) for row in result]
    return jsonify(data)

@app.route('/api/average_delay_by_origen', methods=['GET'])
def average_delay_by_origen():
    query = text("""
        SELECT origin,month, AVG(dep_delay)
        FROM flights 
        group by origin, month
    """)
    
    with engine.connect() as connection:
        result = connection.execute(query).mappings()
        data = [dict(row) for row in result]

    return jsonify(data)

@app.route('/api/flight_map_data', methods=['GET'])
def flight_map_data():
    with engine.connect() as connection:
        query = text("""
            SELECT origin, lat_origin, long_origin, dest, lat_dest, long_dest
            FROM flights
            WHERE lat_origin IS NOT NULL AND long_origin IS NOT NULL
            AND lat_dest IS NOT NULL AND long_dest IS NOT NULL
            GROUP BY origin, lat_origin, long_origin, dest, lat_dest, long_dest
        """)
        result = connection.execute(query).mappings()
        data = [dict(row) for row in result]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
