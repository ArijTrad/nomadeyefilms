# UiLiquidGlass

Reusable liquid glass effect for React.

The effect is built from two parts:

- `UiLiquidGlass.tsx` → reusable wrapper component that applies the liquid glass styles.
- `UiLiquidGlassFilter.tsx` → global SVG filter definition used by the CSS.

---

## Architecture

```
<App>
    <UiLiquidGlassFilter />   ← ONE global SVG filter

    <Navbar />
    <Hero />
    <Pricing />
    ...
</App>
```

The SVG filter is a global resource.

Every component can reference it using:

```css
backdrop-filter: url(#displacementFilter) blur(...);
```

The filter should only be rendered **once** in the application.

---

# Option A — Wrapper

Best for simple components.

```tsx
<UiLiquidGlass className={styles.glass}>
    <div className={styles.content}>
        ...
    </div>
</UiLiquidGlass>
```

Use when:

- cards
- buttons
- simple sections
- components that don't need independent animation

The glass wrapper owns the blurred area.

---

# Option B — Layered

Best for advanced UI.

```tsx
<div className={styles.container}>

    <div className={styles.glassLayer} />

    <div className={styles.contentLayer}>
        ...
    </div>

</div>
```

Example CSS:

```css
.container{
    position:relative;
    overflow:hidden;
    border-radius:1rem;
}

.glassLayer{
    position:absolute;
    inset:0;
    z-index:0;

    backdrop-filter:url(#displacementFilter) blur(2px);
    -webkit-backdrop-filter:blur(2px);

    border-radius:inherit;
}

.contentLayer{
    position:relative;
    z-index:1;
}
```

Use when:

- parallax
- scroll animations
- hover animations
- independently animating the glass
- multiple visual layers

---

# CSS Mental Model

`backdrop-filter` is **not** a background.

It always means:

> "Apply this filter to everything behind this element."

The filter affects the element's own rectangle.

It depends on:

- size
- border-radius
- overflow
- position

It does **not** inherit the parent's shape automatically.

---

# Rules

✓ Render `<UiLiquidGlassFilter />` once in `App.tsx`.

✓ Use Option A for simple reusable components.

✓ Use Option B for advanced layered layouts.

✓ Style each component normally; the glass is only responsible for the visual effect.

✗ Do not render multiple `UiLiquidGlassFilter` components.

✗ Do not mix Option A and Option B inside the same component unless intentionally creating multiple glass surfaces.

---

# Future Improvements

Possible additions:

- Glass variants (`nav`, `card`, `hero`)
- Theme support
- Adjustable blur amount
- Adjustable displacement scale
- Animated distortion
- Mouse-reactive glass
- Scroll-based parallax