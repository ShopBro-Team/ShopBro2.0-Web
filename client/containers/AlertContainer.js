import {connect} from 'react-redux'

import Alert from '../components/Alert'


export default connect()(Alert)

//connects redux to our react component Alert
//without this we wouldn't be able to test react by itself 