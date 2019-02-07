import React from 'react'
import {connect} from "react-redux"
import SampleDataList from '../components/SampleDataList'

// This is a container

export const mapStateToProps = (state) => {
	return {
		data: state.sample.data
	}
}

export default connect(mapStateToProps)(SampleDataList)
