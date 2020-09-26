import styled from 'styled-components';

export const ContactDiv = styled.div`
    padding: 50px 0;
    text-align: center
`;

export const Title = styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
`;

export const Span = styled.span`
    font-weight: normal
`;

export const Form = styled.form`
    width: 70%;
    margin: auto;
`;

export const Input = styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 5px;
    margin-bottom: 10px;
    width:${props => props.half ? "49%" : '' };
    width:${props => props.full ? "100%" : '' };
    float:${props => props.left ? "left" : ''};
    float:${props => props.right ? "right" : ''};
`;

export const FormInput = styled.div`
    overflow: hidden
`;

export const Textarea = styled.textarea`
    width: 100%;
    outline: 0;
    background: #ccc
`;

export const Sub = styled(Input)`
    width: 60%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer
`;

