import { mount } from '@vue/test-utils'
import Home from './Home.vue'
import "regenerator-runtime/runtime";
import Page from '../../../components/Page.vue'

describe("Home.vue", () => {
  const mountWrapper = (props = {} , slots = {}) => {
    return mount(Home, {
      slots,
      props
    })
  }

  it("mount Home", () => {
    const wrapper = mountWrapper()

    expect(wrapper.vm).toBeDefined();
  });

  it("Component page found", async () => {
    const wrapper = mountWrapper()

    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(Page).exists()).toBe(true)
  });
});
