<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3"></th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >ID</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Name</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Email</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Status</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Created at</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Updated at</th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >Action</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in people" :key="person.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" name="remember" class="focus:outline-none focus:ring-2">
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ person.id }}</div>
                </td>
                <router-link to="/description">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" :src="person.image" alt>
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{ person.name }}</div>
                      </div>
                    </div>
                  </td>
                </router-link>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ person.title }}</div>
                  <div class="text-sm text-gray-500">{{ person.email }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                  >Active</span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ person.role }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ person.update }}</td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <a href>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 inline-block pr-1 text-gray-400 hover:text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      ></path>
                    </svg>
                  </a>
                  <a href>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 inline-block pr-1 text-gray-400 hover:text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      ></path>
                    </svg>
                  </a>
                  <a href>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 inline-block pr-1 text-gray-400 hover:text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class>
      <ul class="flex justify-end object-none object-right-bottom">
        <li class>
          <button class="bg-blue-300 p-1 border border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              ></path>
            </svg>PREVIOUS
          </button>
        </li>
        <li>
          <button class="bg-blue-300 p-1 border border-black">2</button>
        </li>
        <li>
          <button class="bg-blue-300 p-1 border border-black">3</button>
        </li>
        <li>
          <button class="bg-blue-300 p-1 border border-black">
            NEXT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3 w-3 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import description from "./description.vue";

const people = [
  {
    id: "1",
    name: "Jane Cooper",
    update: "Regional",
    department: "Optimization",
    role: "Admin",
    email: "jane.cooper@example.com",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
  }
  // More people...
];

export default {
  name: "contents",
  components: {
    description
  },

  setup() {
    return {
      people
    };
  }
};
</script>
<style>
</style>