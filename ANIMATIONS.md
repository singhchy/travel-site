# Tailwind CSS Animations

This project includes a comprehensive set of custom animations built with Tailwind CSS v4.

## Available Animations

### Fade Animations
- `animate-fade-in` - Simple fade in effect
- `animate-fade-in-up` - Fade in with upward movement
- `animate-fade-in-down` - Fade in with downward movement
- `animate-fade-in-left` - Fade in from left
- `animate-fade-in-right` - Fade in from right

### Slide Animations
- `animate-slide-up` - Slide up from bottom
- `animate-slide-down` - Slide down from top
- `animate-slide-left` - Slide in from right
- `animate-slide-right` - Slide in from left

### Bounce Animations
- `animate-bounce-in` - Bouncy entrance effect
- `animate-bounce-out` - Bouncy exit effect

### Scale Animations
- `animate-scale-in` - Scale up entrance
- `animate-scale-out` - Scale down exit

### Rotate Animations
- `animate-rotate-in` - Rotate in entrance
- `animate-rotate-out` - Rotate out exit

### Flip Animations
- `animate-flip-in` - 3D flip entrance
- `animate-flip-out` - 3D flip exit

### Zoom Animations
- `animate-zoom-in` - Zoom in entrance
- `animate-zoom-out` - Zoom out exit

### Interactive Animations
- `animate-shake` - Shake effect
- `animate-wiggle` - Continuous wiggle
- `animate-float` - Floating effect
- `animate-glow` - Glowing effect

### Looping Animations
- `animate-pulse-slow` - Slow pulse (3s)
- `animate-pulse-fast` - Fast pulse (1.5s)
- `animate-spin-slow` - Slow spin (3s)
- `animate-ping-slow` - Slow ping (2s)
- `animate-bounce-slow` - Slow bounce (2s)

## Usage

### Basic Usage
```tsx
<div className="animate-fade-in">
  Your content here
</div>
```

### With Duration Control
```tsx
<div className="animate-fade-in duration-500">
  Your content here
</div>
```

### With Delay
```tsx
<div className="animate-fade-in delay-100">
  Your content here
</div>
```

### With Easing
```tsx
<div className="animate-fade-in ease-out">
  Your content here
</div>
```

### Hover Effects
```tsx
<div className="hover:animate-bounce-in">
  Hover me
</div>
```

### Focus Effects
```tsx
<button className="focus:animate-glow">
  Click me
</button>
```

## Examples

### Hero Section with Fade In
```tsx
<section className="animate-fade-in-up">
  <h1>Welcome to Vietnam</h1>
  <p>Discover the beauty</p>
</section>
```

### Card with Hover Animation
```tsx
<div className="bg-white rounded-lg shadow-lg hover:animate-scale-in transition-all">
  <h3>Destination</h3>
  <p>Description</p>
</div>
```

### Floating Elements
```tsx
<div className="animate-float">
  <Icon />
</div>
```

### Loading State
```tsx
<div className="animate-spin-slow">
  <LoaderIcon />
</div>
```

### Interactive Button
```tsx
<button className="bg-forest-green text-white px-6 py-3 rounded-lg hover:animate-glow focus:animate-shake">
  Book Now
</button>
```

## Combining Animations

You can combine animations with other Tailwind utilities:

```tsx
<div className="animate-fade-in-up hover:animate-scale-in transition-all duration-300">
  Content
</div>
```

## Performance Tips

1. Use `will-change` for complex animations:
```tsx
<div className="animate-fade-in will-change-transform">
  Content
</div>
```

2. Use `transform-gpu` for hardware acceleration:
```tsx
<div className="animate-slide-up transform-gpu">
  Content
</div>
```

3. Disable animations for users who prefer reduced motion:
```tsx
<div className="animate-fade-in motion-reduce:animate-none">
  Content
</div>
```

## Demo Page

Visit `/animation-demo` to see all animations in action with interactive examples.

## Customization

All animations are defined in `src/app/globals.css`. You can modify the keyframes or create new animations by:

1. Adding the animation to the `@theme` block
2. Defining the keyframes below the theme block

Example:
```css
@theme {
  --animate-custom: custom-animation 1s ease-out;
}

@keyframes custom-animation {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

Then use it:
```tsx
<div className="animate-custom">
  Content
</div>
```
