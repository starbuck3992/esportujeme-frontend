<template>
  <TransitionRoot
      as="template"
      :show="innerIsOpen"
  >
    <DialogBase
        as="div"
        class="relative z-10"
        @close="innerIsOpen = false"
    >
      <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-gray-800 px-4 pt-5 pb-4 text-left font-medium text-white transition-all w-full sm:my-8 sm:max-w-lg sm:p-6">
              <div
                  class="absolute top-0 right-0 pt-4 pr-4"
              >
                <button
                    type="button"
                    class="rounded-md text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    @click="innerIsOpen = false"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon
                      class="h-6 w-6"
                      aria-hidden="true"
                  />
                </button>
              </div>
              <component :is="modal" @onFinished="innerIsOpen=false" @onModalChange="changeModal">
              </component>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </DialogBase>
  </TransitionRoot>
</template>

<script lang="ts">

import {
  Dialog as DialogBase,
  DialogPanel,
  TransitionChild,
  TransitionRoot,

} from '@headlessui/vue';
import XMarkIcon from '@heroicons/vue/24/outline/XMarkIcon';
import {defineComponent, computed, PropType, markRaw} from 'vue';
import LoginComponent from '@/components/auth/LoginComponent.vue';
import RegisterComponent from '@/components/auth/RegisterComponent.vue';
import SocialAuth from '@/components/auth/SocialAuth.vue';
import {ModalEnum} from '@/enums/ModalEnum';

export default defineComponent({
  components: {
    SocialAuth,
    DialogBase,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    XMarkIcon,
  },
  props: {
    modalType: {
      type: String as PropType<ModalEnum>,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:isOpen', 'update:modalType'],
  setup(props, {emit}) {
    const innerIsOpen = computed<boolean>({
      get: () => props.isOpen,
      set: (value) => emit('update:isOpen', value),
    });

    const innerModalType = computed<ModalEnum>(() => {
      return props.modalType;
    });

    const modal = computed(() => {
      let modalComponent;
      if (props.modalType === ModalEnum.LOGIN) {
        modalComponent = LoginComponent;
      } else {
        modalComponent = RegisterComponent;
      }
      return markRaw(modalComponent);
    });

    function changeModal(value) {
      emit('update:modalType', value);
    }

    return {
      innerModalType,
      innerIsOpen,
      modal,
      ModalEnum,
      changeModal,
    };
  },
});
</script>
