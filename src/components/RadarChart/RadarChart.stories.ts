import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { reactive, watch } from 'vue';

import RadarChart from './RadarChart.vue';

const meta = {
  title: 'Expo/RadarChart',
  component: RadarChart,
  tags: ['autodocs'],
  argTypes: {
    categories: {
      control: 'object',
      description: 'Array of categories to display on the radar chart',
    },
    layers: {
      control: 'object',
      description: 'Array of layers with their values and styling',
    },
    alignTo: {
      control: 'select',
      options: ['top', 'polarZero'],
      description: 'Alignment of the first category on the chart',
    },
    stepCount: {
      control: { type: 'number', min: 2, max: 20, step: 1 },
      description: 'Number of concentric circles (steps) in the radar chart',
    },
    radarSkeleton: {
      control: 'object',
      description: 'Styling configuration for the radar chart skeleton (grid lines). Properties: strokeWidth (number), strokeColor (string), strokeOpacity (number 0-1)',
    },
    activeLayer: {
      control: 'text',
      description: 'Name of the currently active layer',
    },
  },
} satisfies Meta<typeof RadarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const categories = [
  {
    name: 'Collaboration',
    id: '1',
    description: 'Description 1',
  },
  {
    name: 'Execution',
    id: '2',
    description: 'Description 2',
  },
  {
    name: 'Autonomy',
    id: '3',
    description: 'Description 3',
  },
  {
    name: 'Quality',
    id: '4',
    description: 'Description 4',
  },
  {
    name: 'Security',
    id: '5',
    description: 'Description 5',
  },
  {
    name: 'Belonging',
    id: '6',
    description: 'Description 6',
  },
  {
    name: 'Pride & Craft',
    id: '7',
    description: 'Description 7',
  },
];

const layers = [
  {
    name: 'layer1',
    color: '#3b82f6',
    editable: true,
    categoryValues: {
      '1': 4,
      '2': 5,
      '3': 1,
      '4': 3,
      '5': 3,
      '6': 2,
      '7': 2,
    },
  },
  {
    name: 'layer2',
    color: '#ef4444',
    editable: true,
    categoryValues: {
      '1': 2,
      '2': 3,
      '3': 4,
      '4': 5,
      '5': 2,
      '6': 4,
      '7': 3,
    },
  },
  {
    name: 'layer3',
    color: '#10b981',
    editable: false,
    categoryValues: {
      '1': 5,
      '2': 4,
      '3': 2,
      '4': 3,
      '5': 4,
      '6': 5,
      '7': 1,
    },
  },
];

export const Default: Story = {
  args: {
    categories,
    layers,
    alignTo: 'top',
    stepCount: 7,
    activeLayer: 'layer1',
    radarSkeleton: {
      strokeWidth: 1,
      strokeColor: '#dfdfdf',
      strokeOpacity: 1,
    },
  },
  render: (args) => ({
    components: { RadarChart },
    setup() {
      // Create reactive state from args
      const state = reactive({
        categories: args.categories,
        layers: args.layers,
        activeLayer: args.activeLayer,
        alignTo: args.alignTo,
        stepCount: args.stepCount ?? 7,
        radarSkeleton: args.radarSkeleton ?? {
          strokeWidth: 1,
          strokeColor: '#dfdfdf',
          strokeOpacity: 1,
        },
      });

      // Watch for changes from Storybook controls and update reactive state
      watch(
        () => args.categories,
        (newCategories) => {
          state.categories = newCategories;
        },
        { deep: true }
      );

      watch(
        () => args.layers,
        (newLayers) => {
          state.layers = newLayers;
        },
        { deep: true }
      );

      watch(
        () => args.activeLayer,
        (newActiveLayer) => {
          state.activeLayer = newActiveLayer;
        }
      );

      watch(
        () => args.alignTo,
        (newAlignTo) => {
          state.alignTo = newAlignTo;
        }
      );

      watch(
        () => args.stepCount,
        (newStepCount) => {
          state.stepCount = newStepCount ?? 7;
        }
      );

      watch(
        () => args.radarSkeleton,
        (newRadarSkeleton) => {
          state.radarSkeleton = newRadarSkeleton ?? {
            strokeWidth: 1,
            strokeColor: '#dfdfdf',
            strokeOpacity: 1,
          };
        },
        { deep: true }
      );

      return state;
    },
    template: `
      <div>
        <div style="margin-bottom: 20px">
          <label>Active Layer:</label>
          <select v-model="activeLayer">
            <option v-for="layer in layers" :key="layer.name" :value="layer.name">
              {{ layer.name }}
            </option>
          </select>
        </div>

        <RadarChart
          :categories="categories"
          :layers="layers"
          :active-layer="activeLayer"
          :align-to="alignTo"
          :step-count="stepCount"
          :radar-skeleton="radarSkeleton"
        />
      </div>
    `,
  }),
};

const threeCategories = [
  {
    name: 'Speed',
    id: '1',
    description: 'Speed metric',
  },
  {
    name: 'Quality',
    id: '2',
    description: 'Quality metric',
  },
  {
    name: 'Innovation',
    id: '3',
    description: 'Innovation metric',
  },
];

const oneLayer = [
  {
    name: 'layer one',
    color: '#6366f1',
    editable: true,
    categoryValues: {
      '1': 5,
      '2': 4,
      '3': 3,
    },
  },
];

export const ThreeCategoriesOneLayer: Story = {
  args: {
    categories: threeCategories,
    layers: oneLayer,
    alignTo: 'top',
    stepCount: 5,
    activeLayer: 'layer one',
    radarSkeleton: {
      strokeWidth: 1,
      strokeColor: '#dfdfdf',
      strokeOpacity: 1,
    },
  },
  render: (args) => ({
    components: { RadarChart },
    setup() {
      const state = reactive({
        categories: args.categories,
        layers: args.layers,
        activeLayer: args.activeLayer,
        alignTo: args.alignTo,
        stepCount: args.stepCount ?? 7,
        radarSkeleton: args.radarSkeleton ?? {
          strokeWidth: 1,
          strokeColor: '#dfdfdf',
          strokeOpacity: 1,
        },
      });

      watch(
        () => args.categories,
        (newCategories) => {
          state.categories = newCategories;
        },
        { deep: true }
      );

      watch(
        () => args.layers,
        (newLayers) => {
          state.layers = newLayers;
        },
        { deep: true }
      );

      watch(
        () => args.activeLayer,
        (newActiveLayer) => {
          state.activeLayer = newActiveLayer;
        }
      );

      watch(
        () => args.alignTo,
        (newAlignTo) => {
          state.alignTo = newAlignTo;
        }
      );

      watch(
        () => args.stepCount,
        (newStepCount) => {
          state.stepCount = newStepCount ?? 7;
        }
      );

      watch(
        () => args.radarSkeleton,
        (newRadarSkeleton) => {
          state.radarSkeleton = newRadarSkeleton ?? {
            strokeWidth: 1,
            strokeColor: '#dfdfdf',
            strokeOpacity: 1,
          };
        },
        { deep: true }
      );

      return state;
    },
    template: `
        <RadarChart
          :categories="categories"
          :layers="layers"
          :active-layer="activeLayer"
          :align-to="alignTo"
          :step-count="stepCount"
          :radar-skeleton="radarSkeleton"
        />
    `,
  }),
};

const fourCategories = [
  {
    name: 'Design',
    id: '1',
    description: 'Design quality',
  },
  {
    name: 'Development',
    id: '2',
    description: 'Development speed',
  },
  {
    name: 'Testing',
    id: '3',
    description: 'Test coverage',
  },
  {
    name: 'Deployment',
    id: '4',
    description: 'Deployment frequency',
  },
];

const eightLayers = [
  {
    name: 'Team Alpha',
    color: '#3b82f6',
    editable: true,
    categoryValues: {
      '1': 5,
      '2': 4,
      '3': 6,
      '4': 5,
    },
  },
  {
    name: 'Team Beta',
    color: '#ef4444',
    editable: true,
    categoryValues: {
      '1': 4,
      '2': 5,
      '3': 4,
      '4': 6,
    },
  },
  {
    name: 'Team Gamma',
    color: '#10b981',
    editable: true,
    categoryValues: {
      '1': 6,
      '2': 3,
      '3': 5,
      '4': 4,
    },
  },
  {
    name: 'Team Delta',
    color: '#f59e0b',
    editable: true,
    categoryValues: {
      '1': 3,
      '2': 6,
      '3': 4,
      '4': 5,
    },
  },
  {
    name: 'Team Epsilon',
    color: '#8b5cf6',
    editable: true,
    categoryValues: {
      '1': 5,
      '2': 4,
      '3': 5,
      '4': 6,
    },
  },
  {
    name: 'Team Zeta',
    color: '#ec4899',
    editable: true,
    categoryValues: {
      '1': 4,
      '2': 6,
      '3': 3,
      '4': 5,
    },
  },
  {
    name: 'Team Eta',
    color: '#06b6d4',
    editable: true,
    categoryValues: {
      '1': 6,
      '2': 5,
      '3': 4,
      '4': 4,
    },
  },
  {
    name: 'Team Theta',
    color: '#84cc16',
    editable: true,
    categoryValues: {
      '1': 4,
      '2': 5,
      '3': 6,
      '4': 5,
    },
  },
];

export const FourCategoriesEightLayers: Story = {
  args: {
    categories: fourCategories,
    layers: eightLayers,
    alignTo: 'top',
    stepCount: 8,
    activeLayer: 'Team Alpha',
    radarSkeleton: {
      strokeWidth: 1,
      strokeColor: '#dfdfdf',
      strokeOpacity: 1,
    },
  },
  render: (args) => ({
    components: { RadarChart },
    setup() {
      const state = reactive({
        categories: args.categories,
        layers: args.layers,
        activeLayer: args.activeLayer,
        alignTo: args.alignTo,
        stepCount: args.stepCount ?? 7,
        radarSkeleton: args.radarSkeleton ?? {
          strokeWidth: 1,
          strokeColor: '#dfdfdf',
          strokeOpacity: 1,
        },
      });

      watch(
        () => args.categories,
        (newCategories) => {
          state.categories = newCategories;
        },
        { deep: true }
      );

      watch(
        () => args.layers,
        (newLayers) => {
          state.layers = newLayers;
        },
        { deep: true }
      );

      watch(
        () => args.activeLayer,
        (newActiveLayer) => {
          state.activeLayer = newActiveLayer;
        }
      );

      watch(
        () => args.alignTo,
        (newAlignTo) => {
          state.alignTo = newAlignTo;
        }
      );

      watch(
        () => args.stepCount,
        (newStepCount) => {
          state.stepCount = newStepCount ?? 7;
        }
      );

      watch(
        () => args.radarSkeleton,
        (newRadarSkeleton) => {
          state.radarSkeleton = newRadarSkeleton ?? {
            strokeWidth: 1,
            strokeColor: '#dfdfdf',
            strokeOpacity: 1,
          };
        },
        { deep: true }
      );

      return state;
    },
    template: `
      <div>
        <div style="margin-bottom: 20px">
          <label>Active Layer:</label>
          <select v-model="activeLayer">
            <option v-for="layer in layers" :key="layer.name" :value="layer.name">
              {{ layer.name }}
            </option>
          </select>
        </div>

        <RadarChart
          :categories="categories"
          :layers="layers"
          :active-layer="activeLayer"
          :align-to="alignTo"
          :step-count="stepCount"
          :radar-skeleton="radarSkeleton"
        />
      </div>
    `,
  }),
};