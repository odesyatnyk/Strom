import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Greeting from '@/components/Greeting.vue';

describe('Greeting.vue', () => {
	it('renders props.msg when passed', () => {
		const msg = 'new message';
		const wrapper = shallowMount(Greeting, {
			propsData: { msg }
		});
		expect(wrapper.text()).to.include(msg);
	});
});
