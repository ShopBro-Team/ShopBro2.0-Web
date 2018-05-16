import {connect} from 'react-redux'

import BudgetSetting from '../components/BudgetSetting'


export default connect()(BudgetSetting)

//connects redux to our react component BudgetSetting
//without this we wouldn't be able to test react by itself 