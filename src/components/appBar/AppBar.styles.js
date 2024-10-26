import styled from "styled-components";
import { media } from "../../styles/theme/theme";

export const AppBarWrap = styled.div`
  box-shadow: 0 0.125rem 0.25rem rgba(165, 163, 174, 0.3);
  padding: 18px 24px;
  margin: 16px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.white};

  ${media.xxxl`
    padding: 14px 12px;
 `}

  ${media.xxxl`
    margin: 12px;
  `}

  .appbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .appbar-title {
    font-size: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.cadet};

    ${media.lg`
      display: none;
    `}
  }

  .appbar-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    column-gap: 10px;
  }

  .appbar-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    ${media.lg`
      flex: 1;
    `}
  }

  .sidebar-open-btn {
    align-items: center;
    color: ${(props) => props.theme.colors.ashgray};
    display: none;

    ${media.xl`
      display: inline-flex;
    `}
  }

  .appbar-search {
    .input-group {
      background-color: #f9fafb;
      border-radius: 6px;
      height: 44px;
      min-width: 320px;
      display: flex;
      align-items: stretch;
      padding: 4px 12px;
      position: relative;

      ${media.lg`
        min-width: 280px;
        margin-right: auto;
        margin-left: 12px;
        height: 40px;
      `}

      ${media.md`
        min-width: auto;
        background: transparent;
        margin-left: 0;
      `}

      .input-icon {
        width: 20px;
        display: inline-flex;
        place-items: center;
      }

      .input-control {
        border: none;
        outline: 0;
        font-size: 15px;
        color: ${(props) => props.theme.colors.gray700};
        padding-right: 12px;
        padding-left: 12px;
        background-color: transparent;

        ${media.md`
          position: absolute;
          top: 100%;
          left: 0;
          width: 260px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.1);
          height: 40px;
          border-radius: 4px;
          visibility: hidden;
          opacity: 0;

          &.show-input-control{
            visibility: visible;
            opacity: 1;
          }
        `}

        &::placeholder {
          color: ${(props) => props.theme.colors.ashgray};
        }
      }
    }
  }
`;