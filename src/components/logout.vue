<template>
  <!-- <TransitionRoot
    appear
    as="template"
    :show="isOpen"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  > -->
    <!-- <Dialog @close="setIsOpen" class="fixed inset-0 z-10 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen">
        <TransitionChild
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black opacity-30"/>
        </TransitionChild>
        <div class="relative max-w-sm mx-auto bg-white rounded">
          <TransitionChild
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div class="p-6 text-center shadow-lg">
              <DialogTitle class="p-2 font-bold text-2xl">Ready to leave?</DialogTitle>
              <hr class="my-2">
              <DialogDescription class="text-base my-2 py-2">
                Are you sure you want to logout of your account?
                <p class="text-justify my-2 text-red-400">This action cannot be undone and you will have to enter yor login details again!</p>
              </DialogDescription>
              <hr class="my-2">
              <router-link to="/">
                <button
                  @click="handleDeactivate"
                  class="bg-red-600 px-4 py-2 m-3 rounded text-white focus:outline-none focus:ring-current"
                >Logout</button>
              </router-link>
              <router-link to="/dashboard">
                <button
                  @click="setIsOpen(false)"
                  class="bg-gray-600 px-4 py-2 m-3 rounded text-white focus:outline-none focus:ring-current"
                >Cancel</button>
              </router-link>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script> -->
<!-- import { ref } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
  TransitionRoot,
  TransitionChild
} from "@headlessui/vue";

export default {
  name: "Logout",

  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription
  },
  setup() {
    let isOpen = ref(true);

    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value;
      },
      handleDeactivate() {}
    };
  }
};
</script>

<style>
</style> -->

  <div class="fixed inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Logout
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Ready to leave?
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                 Are you sure you want to logout of your account?
                 <p>This action cannot be undone and you will have to enter yor login details again!</p>
                </p>
              </div>

              <div class="mt-4">
                <router-link to="/">
                <button
                  @click="handleDeactivate"
                  class="inline-flex mx-2 justify-end px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                >Logout</button>
              </router-link>
                <button
                  @click="closeModal"
                  class="inline-flex mx-2 justify-end px-4 py-2 text-sm font-medium text-black bg-gray-200 border border-transparent rounded-md hover:bg-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                >Cancel</button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from '@headlessui/vue'

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },

  setup() {
    const isOpen = ref(false)

    return {
      isOpen,
      closeModal() {
        isOpen.value = false
      },
      openModal() {
        isOpen.value = true
      },
    }
  },
}
</script>
