import styled, { css } from 'styled-components';

const Form = styled.form`
  ${(props) =>
    props.type === 'regular' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;

      @media (max-width: 900px) {
        width: 55rem;
      }

      @media (max-width: 650px) {
        width: 30rem;
      }

      @media (max-width: 330px) {
        width: 28rem;
      }

      @media (max-width: 300px) {
        width: 25rem;
      }

      @media (max-width: 290px) {
        width: 23rem;
      }
    `} 
    
  overflow: hidden;
  font-size: 1.4rem;
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
