export const StyledFormControl = styled.form`
  display: flex;
  margin: 0 auto;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 80vh;
`
export const StyledInput = styled(Input)`
  padding: 15px 35px 15px 15px;
  border-radius: 8px;
  background-color: #252525;
  color: #fff;
  outline: none;
  border: none;
  width: 350px;
`

export const FormField = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`

export const StyledButton = styled(Button)`
  font-size: 0.9rem;
  background: linear-gradient(90deg, #ffa100, #ff005c);
  color: black;
  font-weight: 700;
  transition: all .3s ease;
  padding: 15px 30px;
  border-radius: 1rem;
  cursor: pointer;
`