import {mapDispatchToProps, mapStateToProps} from '../../app/containers/jumbotron'
import {requestSampleData, sampleAction} from '../../app/actions/sample'

describe('[Containers] - Jumbotron', () => {

	test('"mapStateToProps" should return correct state object required for jumbotron', () => {

		const state = {
			sample: {
				name: "Vladmir Putin"
			}
		}

		expect(mapStateToProps(state)).toEqual({
			name: "Vladmir Putin"
		})
	})

	test('"mapDispatchToProps" should return correct prop object with dispatch functions required for jumbotron', () => {
		const mockDispatch = jest.fn(action => undefined)
		const props = mapDispatchToProps(mockDispatch)

		expect(props).toHaveProperty('onSampleBtnClick')
		props.onSampleBtnClick();
		expect(mockDispatch.mock.calls[0][0]).toEqual(sampleAction())

		expect(props).toHaveProperty('onGetSampleBtnClick')
		props.onGetSampleBtnClick();
		expect(mockDispatch.mock.calls[1][0]).toEqual(requestSampleData())
	})

})
