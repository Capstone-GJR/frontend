import { Alert } from 'react-bootstrap';

function CustomAlert(props) {
  return (
    <div className='d-flex justify-content-center m-3'>
        <Alert className='text-center'
            show={props.showAlert} 
            variant={props.alertVariant}
        >
            <Alert.Heading>
                {props.alertHeading}
            </Alert.Heading>
        </Alert>
    </div>
  )
}

export default CustomAlert