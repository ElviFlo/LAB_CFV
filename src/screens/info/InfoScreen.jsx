import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const InfoScreenWrap = styled.main`
    margin-top: 20px;
    padding: 12px 17px;

    .container {
        background-color: ${(props) => props.theme.colors.white};
        border-radius: 12px; 
        box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);        padding: 20px;
        box-sizing: border-box;
        padding: 18px 24px;

        ${media.xxxl`
            padding: 14px 12px;
        `}
        
        ${media.xxxl`
            margin: 12px;
        `}
        
        .banner {
            display: grid;
            margin-bottom: 20px;
            grid-template-columns: 3fr 3fr;
            align-items: center;

            ${media.lg`
                grid-template-columns: 100%;
            `}
            
            .texto-banner {
                
               margin-top: 50px;
               margin-left: 30px;

                h4 {
                    font-weight: 730;
                    font-size: 30px;
                    margin-bottom: 0;
                    line-height: .2;
                }

                h1 {
                    font-weight:800;
                    font-size: 100px;
                }

                .banner-paragraph {
                    font-size: 18px;
                    text-align: justify;
                    margin-right: 40px;
                }

                .button {
                    display: inline-block;
                    padding: 10px 10px;
                    margin-top: 25px;
                    background-color: #6c63ff;
                    color: white;
                    border: none;
                    border-radius: 18px;
                    text-decoration: none;
                    font-weight: bold;
                    text-align: center;
                    
                    &:hover {
                        background-color: #2126B8;
                    }
                }

            }

            
            img {
                width: 100%;
                max-width: 900px;
                height: auto;
                border-radius: 8px;
                display: block;
                align-self: center; 
            }

        }

        .insights-container {
            width: 96%;
            background: #f8f8f9;
            border-radius: 12px;
            box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
            padding: 20px;
            margin: 50px auto;
            align-self: center; 
            

            h2 {
                margin-top: 50px;
                font-weight: 730;
                font-size: 54px;
                text-align: center;
                margin-bottom: 10px;
            }

            p {
                font-size: 20px;
                text-align: center;
                margin: 0;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;

            }

            .stats {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                gap: 30px;

                .stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-top: 20px;

                    .circle {
                        display: center;
                        background-color: #6c63ff;
                        color: white;
                        border-radius: 50%;
                        width: 130px;
                        height: 130px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: bold;
                        font-size: 26px;
                        margin-bottom: 10px;

                    }


                    p {
                        margin-top: 10px;
                        font-size: 22px;
                        font-weight: bold;
                        max-width: 70%;
                        line-height: 1.2;
                    }

                }
 
            }

            .subtittle{
                margin-left: 40px;
                margin-top: 100px;
                font-weight: 730;
                font-size: 54px;
                text-align: center;
                margin-bottom: 10px;
                
            }

            .subtittle-description {
                font-size: 20px;
                text-align: center;
                margin: 0;
                max-width: 800px;
                margin-left: auto;
                margin-right: auto;
                margin-bottom: 20px;
            }

            .tools {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 20px .5px;
                margin-top: 40px;
                margin-left: 45px;
                margin-bottom: 50px;
            }

            .tool-item {
                background-color: white;
                border: 1px solid #e0e0e0;
                border-radius: 20px;
                padding: 15px;
                width: 260px;
            }

            .tool-content {
                display: flex;
                align-items: center;
            }

            .tool-icon {
                margin-left: 8px;
                margin-right: 25px;
                width: 40px;
                height: 40px;
            }

            .tool-text {
                display: flex;
                flex-direction: column;
            }

            .tool-text h3 {
                margin: 0;
                font-size: 18px;
            }

            .tool-description {
                font-size: 16px;
                color: #666;
            }
            
            .data-content {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 20px;
                gap: 30px;
                margin-bottom: 60px;

                .Flight-Statistics{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-top: 20px;
                    border-radius: 20px;
                    border-color: white;
                    border-style: solid;
                    border-width: 4px;
                    box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
                    width: 400px;

                    h3 {
                        margin-top: 25px;
                        font-weight: 730;
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 2px;
                    }
                    
                    p {
                        font-size: 19px;
                        color: #666;
                        padding: .5rem 3rem;
                        margin-bottom: 25px;
                    }
                }

                .Customer-Trends{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-top: 20px;
                    border-radius: 20px;
                    border-color: white;
                    border-style: solid;
                    border-width: 4px;
                    box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
                    width: 400px;

                    h3 {
                        margin-top: 25px;
                        font-weight: 730;
                        font-size: 24px;
                        text-align: center;
                        margin-bottom: 2px;
                    }
                    
                    p {
                        font-size: 19px;
                        color: #666;
                        padding: .5rem 3rem;
                        margin-bottom: 25px;
                    }
                }

            }
            
            .button-container {
                display: flex;
                justify-content: center;
                margin-top: 20px;

                .button {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 10px;
                background-color: #6c63ff;
                color: white;
                border: none;
                border-radius: 18px;
                text-decoration: none;
                font-weight: bold;
                text-align: center;
                align-self: center; 
                margin-bottom: 40px;
                    
                &:hover {
                    background-color: #2126B8;
                }
            }

            }
            
            .tables-container {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;
                margin-left: 5px;
                margin-bottom: 40px;
            }

            .table-item {
                background-color: white;
                border-radius: 12px;
                box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
                padding: 20px;
                flex: 1;
                margin: 0 10px;


                h3 {
                    text-align: center;
                    font-size: 24px;
                    font-weight: 700;
                    margin-bottom: 15px;
                }

                ul {
                    list-style-type: disc;
                    padding-left: 20px;
                    
                    li {
                    font-size: 18px;
                    margin-bottom: 5px;
                    line-height: 1.5;
                    margin-bottom: 15px;
                    margin: 15px;
                    }

                    strong {
                    font-weight: bold;
                    color: #6c63ff;
                    }
                }
            }
            
            .tables-container-2 {
                display: grid;
                margin-top: 5px;
                background-color: white;
                border-radius: 12px;
                box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
                padding: 30px;
                justify-items: center;
                margin-bottom: 50px;
                margin-left: 15px;
                margin-right: 13px;

            }

            .tables-container-2 h3 {
                margin-top: 10px;
                text-align: center;
                font-size: 26px;
                font-weight: 700;
                margin-bottom: 15px;
            }

            .tables-container-2 ul {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px 50px;
                list-style-type: disc;
                padding-left: 20px;
                max-width: 900px;
                margin-bottom: 40px;

                li {
                    font-size: 18px;
                    margin: 10px 15px; 
                    line-height: 1.5;
                    
                }

                strong {
                    font-weight: bold;
                    color: #6c63ff;
                }
            }
            
            
            
        }

    }
}`;
