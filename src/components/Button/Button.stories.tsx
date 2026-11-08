
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button label',
  },
};

export const LongLabel: Story = {
  args: {
    label: 'Continue to Checkout',
  },
};

export const Secondary: Story = {
    args: {
      label: 'Button label',
      prominence: 'secondary',
    },
  };
  

export const Large: Story = {
    args: {
      label: 'Button label',
      size: 'large',
    },
  };
  
  export const Small: Story = {
    args: {
      label: 'Button label',
      size: 'small',
    },
  };


  export const AllVariants: Story = {
    args: {
      label: 'Button label',
    },
    render: () => (
      <div style={{ display: 'grid', gap: '24px' }}>
        {(['primary', 'secondary'] as const).map((prominence) => (
          <div
            key={prominence}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            {(['small', 'medium', 'large'] as const).map((size) => (
              <Button
                key={size}
                prominence={prominence}
                size={size}
                label={`${prominence} ${size}`}
              />
            ))}
          </div>
        ))}
      </div>
    ),
  };
  
  