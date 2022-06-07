<template>
  <main>
    <div
      class="
        px-4
        sm:px-0
        mt-10
        sm:mt-12 sm:px-6
        md:mt-16
        lg:mt-20 lg:px-8
        xl:mt-16
      "
    >
      <div class="sm:text-center lg:text-left">
        <div class="guideSection">
          <div class="flex justify-between items-center">
            <h2
              class="
                guideTitle
                text-3xl
                tracking-tight
                leading-10
                font-extrabold
                text-gray-900
                sm:text-5xl sm:leading-none
                md:text-6xl
              "
            >
              Juno's Tasks Manager
            </h2>
            <button
              type="button"
              class="
                py-4
                px-10
                mr-2
                mb-2
                text-sm
                font-medium
                text-gray-900
                focus:outline-none
                bg-white
                rounded-lg
                border border-gray-200
                hover:bg-gray-100 hover:text-blue-700
                focus:z-10 focus:ring-4 focus:ring-gray-200
                dark:focus:ring-gray-700
                dark:bg-gray-800
                dark:text-gray-400
                dark:border-gray-600
                dark:hover:text-white
                dark:hover:bg-gray-700
              "
              @click="isModalopen = true"
            >
              Add Task
            </button>
          </div>
          <div class="border-b border-gray-200 dark:border-gray-700">
            <ul
              class="
                flex flex-wrap
                -mb-px
                text-sm
                font-medium
                text-center text-gray-500
                dark:text-gray-400
              "
            >
              <li>
                <a
                  href="#"
                  :class="{
                    'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500':
                      state.gridActive,
                  }"
                  class="
                    inline-flex
                    p-4
                    rounded-t-lg
                    border-b-2 border-transparent
                    hover:text-gray-600 hover:border-gray-300
                    dark:hover:text-gray-300
                    group
                  "
                  v-on:click="showList"
                >
                  <svg
                    :class="{
                      'text-blue-600 dark:text-blue-500': state.gridActive,
                    }"
                    class="
                      mr-2
                      w-5
                      h-5
                      text-gray-400
                      group-hover:text-gray-500
                      dark:text-gray-500 dark:group-hover:text-gray-300
                    "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  List View
                </a>
              </li>
              <li class="mr-2">
                <a
                  href="#"
                  class="
                    inline-flex
                    p-4
                    rounded-t-lg
                    border-b-2 border-transparent
                    hover:text-gray-600 hover:border-gray-300
                    dark:hover:text-gray-300
                    group
                  "
                  :class="{
                    'text-blue-600 border-blue-600 dark:text-blue-500 dark:border-blue-500':
                      !state.gridActive,
                  }"
                  aria-current="page"
                  @click="showGrid"
                >
                  <svg
                    class="mr-2 w-5 h-5"
                    :class="{
                      'text-blue-600 dark:text-blue-500': !state.gridActive,
                    }"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    ></path>
                  </svg>
                  Grid View
                </a>
              </li>
            </ul>
          </div>
          <div
            aria-label="group of cards"
            tabindex="0"
            class="focus:outline-none py-8 w-full"
          >
            <div
              v-if="!state.gridActive"
              class="lg:flex items-center justify-center w-full flex-wrap"
            >
              <!-- F La Classe Ta3 Had Div Hab Ndir Condition 3La lg:w-3/12 toun 3la hssab state defois gridView defois ListView -->
              <div
                v-for="(task, index) in state.tasks"
                :key="task._id"
                tabindex="0"
                aria-label="card 1"
                class="
                  focus:outline-none
                  lg:w-3/12 lg:mr-7 lg:h-72
                  mb-7
                  bg-white
                  p-6
                  shadow
                  rounded
                  flex flex-col
                "
              >
                <div class="flex items-center border-b border-gray-200 pb-6">
                  <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                      <p
                        tabindex="0"
                        class="
                          focus:outline-none
                          text-xl
                          font-medium
                          leading-5
                          text-gray-800
                        "
                        :class="{ 'line-through': task.isDone }"
                      >
                        #{{ index }} - {{ task.name }}
                      </p>
                      <p
                        tabindex="0"
                        class="
                          erd
                          focus:outline-none
                          text-sm
                          leading-normal
                          pt-2
                          text-gray-500
                        "
                      >
                        ⌛ {{ task.deadline }}
                      </p>
                    </div>
                    <div role="img" aria-label="bookmark">
                      <input
                        class="
                          form-check-input
                          h-6
                          w-6
                          border border-gray-300
                          rounded-sm
                          bg-white
                          checked:bg-blue-600 checked:border-blue-600
                          focus:outline-none
                          transition
                          duration-200
                          mt-2
                          align-top
                          bg-no-repeat bg-center bg-contain
                          float-left
                          mr-2
                          cursor-pointer
                        "
                        v-model="task.isDone"
                        v-on:change="toggleDone(task._id)"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div class="px-2 flex flex-1 flex-col justify-around">
                  <p
                    tabindex="0"
                    class="
                      focus:outline-none
                      text-sm
                      leading-5
                      py-4
                      text-gray-600
                    "
                    :class="{ 'line-through': task.isDone }"
                  >
                    {{ task.description }}
                  </p>
                  <div tabindex="0" class="focus:outline-none flex">
                    <button
                      type="button"
                      class="
                        text-white
                        bg-blue-700
                        hover:bg-blue-800
                        focus:ring-4 focus:ring-blue-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        mr-2
                        mb-2
                        dark:bg-blue-600 dark:hover:bg-blue-700
                        focus:outline-none
                        dark:focus:ring-blue-800
                      "
                      @click="openModel(task)"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      class="
                        focus:outline-none
                        text-white
                        bg-red-700
                        hover:bg-red-800
                        focus:ring-4 focus:ring-red-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        mr-2
                        mb-2
                        dark:bg-red-600
                        dark:hover:bg-red-700
                        dark:focus:ring-red-900
                      "
                      @click="deleteTask(task._id)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="state.gridActive"
              class="lg:flex items-center justify-center w-full flex-wrap"
            >
              <!-- F La Classe Ta3 Had Div Hab Ndir Condition 3La lg:w-3/12 toun 3la hssab state defois gridView defois ListView -->
              <div
                v-for="(task, index) in state.tasks"
                :key="task._id"
                tabindex="0"
                aria-label="card 1"
                class="
                  focus:outline-none
                  lg:w-full lg:mr-7 lg:h-72
                  mb-7
                  bg-white
                  p-6
                  shadow
                  rounded
                  flex flex-col
                "
              >
                <div class="flex items-center border-b border-gray-200 pb-6">
                  <div class="flex items-start justify-between w-full">
                    <div class="pl-3 w-full">
                      <p
                        tabindex="0"
                        class="
                          focus:outline-none
                          text-xl
                          font-medium
                          leading-5
                          text-gray-800
                        "
                        :class="{ 'line-through': task.isDone }"
                      >
                        #{{ index }} - {{ task.name }}
                      </p>
                      <p
                        tabindex="0"
                        class="
                          erd
                          focus:outline-none
                          text-sm
                          leading-normal
                          pt-2
                          text-gray-500
                        "
                      >
                        ⌛ - {{ task.deadline }} -
                      </p>
                    </div>
                    <div role="img" aria-label="bookmark">
                      <input
                        class="
                          form-check-input
                          h-8
                          w-8
                          border border-gray-300
                          rounded-sm
                          bg-white
                          checked:bg-blue-600 checked:border-blue-600
                          focus:outline-none
                          transition
                          duration-200
                          mt-2
                          align-top
                          bg-no-repeat bg-center bg-contain
                          float-left
                          mr-2
                          cursor-pointer
                        "
                        v-model="task.isDone"
                        v-on:change="toggleDone(task._id)"
                        type="checkbox"
                        value=""
                      />
                    </div>
                  </div>
                </div>
                <div class="px-2 flex flex-1 flex-col justify-around">
                  <p
                    tabindex="0"
                    class="
                      focus:outline-none
                      text-sm
                      leading-5
                      py-4
                      text-gray-600
                    "
                    :class="{ 'line-through': task.isDone }"
                  >
                    {{ task.description }}
                  </p>
                  <div tabindex="0" class="focus:outline-none flex">
                    <button
                      type="button"
                      class="
                        text-white
                        bg-blue-700
                        hover:bg-blue-800
                        focus:ring-4 focus:ring-blue-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        mr-2
                        mb-2
                        dark:bg-blue-600 dark:hover:bg-blue-700
                        focus:outline-none
                        dark:focus:ring-blue-800
                      "
                      @click="openModel(task)"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="
                        focus:outline-none
                        text-white
                        bg-red-700
                        hover:bg-red-800
                        focus:ring-4 focus:ring-red-300
                        font-medium
                        rounded-lg
                        text-sm
                        px-5
                        py-2.5
                        mr-2
                        mb-2
                        dark:bg-red-600
                        dark:hover:bg-red-700
                        dark:focus:ring-red-900
                      "
                      @click="deleteTask(task._id)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <teleport to="body">
    <Modal v-if="isModalopen" @close="closeModel" class="p-8">
      <template #title> Add new Task </template>
      <template #body>
        <form
          @submit.prevent="addNewTask"
          class="relative w-full mt-6 space-y-8"
        >
          <div class="relative">
            <label
              class="
                absolute
                px-2
                ml-2
                -mt-3
                font-medium
                text-gray-600
                bg-white
              "
              >Task Name</label
            >
            <input
              v-model="state.form.name"
              type="text"
              class="
                block
                w-full
                px-4
                py-4
                mt-2
                text-base
                placeholder-gray-400
                bg-white
                border border-gray-300
                rounded-md
                focus:outline-none focus:border-black
              "
              placeholder="UX Desinger Meeting"
            />
          </div>
          <div class="relative">
            <label
              class="
                absolute
                px-2
                ml-2
                -mt-3
                font-medium
                text-gray-600
                bg-white
              "
              >Deadline</label
            >
            <input
              v-model="state.form.deadline"
              type="text"
              class="
                block
                w-full
                px-4
                py-4
                mt-2
                text-base
                placeholder-gray-400
                bg-white
                border border-gray-300
                rounded-md
                focus:outline-none focus:border-black
              "
              placeholder="Tomorrow 18:30"
            />
          </div>
          <div class="relative">
            <label
              class="
                absolute
                px-2
                ml-2
                -mt-3
                font-medium
                text-gray-600
                bg-white
              "
              >Task Description</label
            >
            <textarea
              v-model="state.form.description"
              class="
                resize
                block
                w-full
                px-4
                py-4
                mt-2
                text-base
                placeholder-gray-400
                bg-white
                border border-gray-300
                rounded-md
                focus:outline-none focus:border-black
              "
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia possimus obcaecati natus. Illo, nesciunt."
            ></textarea>
          </div>
          <div class="relative">
            <button
              class="
                inline-block
                w-full
                px-5
                py-4
                text-xl
                font-medium
                text-center text-white
                transition
                duration-200
                bg-blue-600
                rounded-lg
                hover:bg-blue-500
                ease
              "
            >
              Create new Task
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
  <teleport to="body">
    <Modal v-if="isUpdateModalopen" @close="closeModel" class="p-8">
      <template #title>Update Task</template>
      <template #body>
        <form
          @submit.prevent="updateTask"
          class="relative w-full mt-6 space-y-8"
        >
          <div class="relative">
            <label
              class="
                absolute
                px-2
                ml-2
                -mt-3
                font-medium
                text-gray-600
                bg-white
              "
              >Task Name</label
            >
            <input
              v-model="state.form.name"
              type="text"
              class="
                block
                w-full
                px-4
                py-4
                mt-2
                text-base
                placeholder-gray-400
                bg-white
                border border-gray-300
                rounded-md
                focus:outline-none focus:border-black
              "
              placeholder="Todo #1"
            />
          </div>
          <div class="relative">
            <label
              class="
                absolute
                px-2
                ml-2
                -mt-3
                font-medium
                text-gray-600
                bg-white
              "
              >Deadline</label
            >
            <input
              v-model="state.form.deadline"
              type="text"
              class="
                block
                w-full
                px-4
                py-4
                mt-2
                text-base
                placeholder-gray-400
                bg-white
                border border-gray-300
                rounded-md
                focus:outline-none focus:border-black
              "
              placeholder="Tomorrow 18:30"
            />
          </div>
          <div class="relative">
            <label
              class="
                absolute
                px-2
                ml-2
                -mt-3
                font-medium
                text-gray-600
                bg-white
              "
              >Task Description</label
            >
            <textarea
              v-model="state.form.description"
              class="
                resize
                block
                w-full
                px-4
                py-4
                mt-2
                text-base
                placeholder-gray-400
                bg-white
                border border-gray-300
                rounded-md
                focus:outline-none focus:border-black
              "
              placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias mollitia possimus obcaecati natus. Illo, nesciunt."
            ></textarea>
          </div>
          <div class="relative">
            <button
              class="
                inline-block
                w-full
                px-5
                py-4
                text-xl
                font-medium
                text-center text-white
                transition
                duration-200
                bg-blue-600
                rounded-lg
                hover:bg-blue-500
                ease
              "
            >
              Update Task
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </teleport>
</template>

<script setup>
import { onMounted, reactive, ref, inject } from "vue";
import axios from "axios";
import Modal from "../components/Modal.vue";

const isModalopen = ref(false);
const isUpdateModalopen = ref(false);
const swal = inject("$swal");

const state = reactive({
  tasks: [],
  gridActive: true,
  form: {
    name: "",
    deadline: "",
    description: "",
  },
  dataToUpdate: {
    name: "",
    deadline: "",
    description: "",
  },
});

const ENDPOINT = "https://tasks-juno.herokuapp.com/api/tasks";

onMounted(async () => {
  const { data } = await axios.get(ENDPOINT);
  state.tasks = data;
});

function showList() {
  state.gridActive = true;
}

function showGrid() {
  state.gridActive = false;
}

function openModel(task) {
  isUpdateModalopen.value = true;
  state.form.name = task.name;
  state.form.description = task.description;
  state.form.deadline = task.deadline;
  state.dataToUpdate.name = task.name;
  state.dataToUpdate.description = task.description;
  state.dataToUpdate.deadline = task.deadline;
}

function closeModel() {
  isModalopen.value = false;
  isUpdateModalopen.value = false;
  state.form.name = "";
  state.form.description = "";
  state.form.deadline = "";
}

async function addNewTask() {
  const { data } = await axios.post(ENDPOINT, { ...state.form, isDone: false });
  state.tasks.push(data);
  state.form.name = "";
  state.form.description = "";
  state.form.deadline = "";

  isModalopen.value = false;
}

async function deleteTask(id) {
  swal({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      swal("Deleted!", "Your task has been deleted.", "success");

      await axios.delete(`${ENDPOINT}/${id}`);

      state.tasks = state.tasks.filter((task) => task._id !== id);
    }
  });
}

async function toggleDone(id) {
  const taskIndex = state.tasks.findIndex((task) => task._id === id);
  console.log(state.tasks);
  await axios.put(`${ENDPOINT}/${id}`, {
    name: state.tasks[taskIndex].name,
    description: state.tasks[taskIndex].description,
    deadline: state.tasks[taskIndex].deadline,
    isDone: state.tasks[taskIndex].isDone,
  });
  state.tasks = state.tasks.map((task) =>
    task._id === id ? { ...task, isDone: state.tasks[taskIndex].isDone } : task
  );
  console.log(state.tasks[taskIndex]);
}

async function updateTask() {
  const taskIndex = state.tasks.findIndex(
    (task) =>
      task.name === state.dataToUpdate.name &&
      task.description === state.dataToUpdate.description &&
      task.deadline === state.dataToUpdate.deadline
  );
  const id = state.tasks[taskIndex]._id;
  await axios.put(`${ENDPOINT}/${id}`, {
    name: state.form.name,
    description: state.form.description,
    deadline: state.form.deadline,
    isDone: state.tasks[taskIndex].isDone,
  });
  state.tasks = state.tasks.map((task) =>
    task._id === id
      ? {
          ...task,
          name: state.form.name,
          description: state.form.description,
          deadline: state.form.deadline,
          isDone: state.tasks[taskIndex].isDone,
        }
      : task
  );
  state.form.name = "";
  state.form.description = "";
  state.form.deadline = "";

  isUpdateModalopen.value = false;
}
</script>
