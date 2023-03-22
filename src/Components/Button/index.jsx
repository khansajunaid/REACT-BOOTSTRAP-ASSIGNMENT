import { Button } from "react-bootstrap";


export const TestButton = ({buttonname}) => {
    return(
        <div className='TestButton'>
            <Button>Test Button</Button>
            
            <Button variant="secondary">Secondary</Button>{' '}
           <Button className="warning" variant="warning">{buttonname}</Button>{' '}
      
     
        </div>
        );
}
export const PrimaryButton = () => {
    return (
        <div className='PrimaryButton'>
            <Button variant="primary"></Button>{' '}
        </div>
    );

}



  