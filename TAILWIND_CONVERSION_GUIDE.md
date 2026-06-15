# Tailwind CSS Conversion Guide

## Completed Conversions ✅

### Infrastructure Setup

- ✅ Installed Tailwind CSS, PostCSS, and Autoprefixer
- ✅ Created `tailwind.config.js` with project configuration
- ✅ Created `postcss.config.js` for PostCSS integration
- ✅ Created `src/app/globals.css` with Tailwind directives
- ✅ Updated `src/app/layout.tsx` to use new globals.css

### Layout Components

- ✅ **Header Components**: Header1, Header2, Header3, Header4, Header5, Header6

  - Converted Bootstrap grid classes to Tailwind flex/grid utilities
  - Applied responsive hidden/flex with `hidden lg:flex`
  - Updated buttons and styling with Tailwind classes

- ✅ **Footer Components**: Footer1, Footer2, Footer3, Footer4, Footer5, Footer6
  - Converted grid layouts using `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - Updated social links with Tailwind hover effects
  - Applied consistent color schemes (bg-gray-900, text-gray-100)
  - Replaced Bootstrap spacing utilities with Tailwind `gap`, `mb`, `pt`, etc.

### Section Components

- ✅ **Welcome.tsx**: Hero section with grid layout and AOS animations
  - Converted to `py-20` for padding
  - Used `grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`
  - Applied typography: `text-4xl lg:text-5xl font-bold`
  - Replaced `space30` with Tailwind spacing

## Conversion Pattern Template

### Bootstrap to Tailwind Mapping

| Bootstrap                            | Tailwind                                                        |
| ------------------------------------ | --------------------------------------------------------------- |
| `container`                          | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`                        |
| `row`                                | `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`          |
| `col-lg-6`                           | `lg:col-span-2` (within grid)                                   |
| `col-md-6`                           | `md:col-span-2` (within grid)                                   |
| `d-none d-lg-block`                  | `hidden lg:block`                                               |
| `text-right`                         | `text-right`                                                    |
| `align-items-center`                 | `items-center`                                                  |
| `spacing classes (space20, space30)` | `mb-6 mt-4 pt-8` etc.                                           |
| Theme buttons                        | `px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg` |

### Example Conversion

**Before (Bootstrap):**

```jsx
<div className="container">
  <div className="row align-items-center">
    <div className="col-lg-6">
      <h2 className="title">Section Title</h2>
    </div>
    <div className="col-lg-6 d-none d-lg-block">
      <img src="..." alt="..." />
    </div>
  </div>
</div>
```

**After (Tailwind):**

```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
      <h2 className="text-3xl font-bold text-gray-900">Section Title</h2>
    </div>
    <div className="hidden lg:block">
      <img src="..." alt="..." className="w-full h-auto rounded-lg" />
    </div>
  </div>
</div>
```

## Remaining Sections to Convert

### Sections in `/src/sections/`

1. **About.tsx** - Similar grid layout as Welcome
2. **Blog.tsx** - Blog card grid layout
3. **CaseStudy.tsx** - Case study showcase
4. **Contact.tsx** - Contact form section
5. **HowItWork1.tsx** - Step-by-step layout
6. **HowItWork2.tsx** - Alternative step layout
7. **Logo.tsx** - Logo slider section
8. **Pricing.tsx** - Pricing cards
9. **Service.tsx** - Service cards
10. **Subscribe.tsx** - Newsletter section
11. **TaxBusiness.tsx** - Business info section
12. **Testimonial.tsx** - Testimonial carousel
13. **User1.tsx** - User section 1
14. **User2.tsx** - User section 2
15. **Works.tsx** - Portfolio/works section

### Components to Convert

#### `/src/components/elements/`

- BackToTop.js
- BlogFilter1.js
- CareerFilter1.js
- CaseStudyFilter1.js, CaseStudyFilter2.js
- Counter.js
- CounterUp.js
- Faq1.js, FaqFilter1.js
- QuantityInput.js
- ThemeSwitch.js

#### `/src/components/blog/`

- BlogCard1.js, BlogCard2.js, BlogCard3.js
- BlogPost.js
- Pagination.js

#### `/src/components/layout/`

- Breadcrumb.js
- DemoSidebar.js
- MobileMenu.js
- PageHead.js
- Menu.js (needs menu styling)

#### `/src/components/slider/`

- LogoSlider1.js
- LogoSlider2.tsx
- ShopThumbSlider.js
- TestimonialSlider3.js
- TestimonialThumbSlider1.js

#### `/src/components/homepages/`

- home1/, home2/, home3/, home4/, home5/, home6/, home7/ directories

## Key Tailwind Classes to Use

### Spacing

- `pt-{n}`, `pb-{n}`, `px-{n}`, `py-{n}` - Padding
- `mt-{n}`, `mb-{n}`, `mx-{n}`, `my-{n}` - Margin
- `gap-{n}` - Grid/Flex gap

### Sizing

- `w-full`, `h-auto` - Width and height
- `max-w-7xl`, `max-w-4xl` - Max width containers

### Typography

- `text-{size}` - Text size (sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl)
- `font-{weight}` - Font weight (semibold, bold, etc.)
- `text-{color}-{shade}` - Text color

### Colors

- Text: `text-gray-600`, `text-gray-900`, `text-white`
- Background: `bg-white`, `bg-gray-50`, `bg-gray-900`, `bg-blue-600`
- Borders: `border border-gray-200`, `border-t border-gray-800`

### Flexbox & Grid

- `flex`, `flex-col`, `flex-row` - Flex containers
- `grid`, `grid-cols-{n}` - Grid layouts
- `gap-{n}`, `items-center`, `justify-between` - Layout alignment

### Responsive

- `hidden md:block`, `hidden lg:block` - Responsive visibility
- `md:col-span-2`, `lg:col-span-3` - Responsive grid spanning
- `sm:px-6`, `lg:px-8` - Responsive padding

### Transitions & Effects

- `transition`, `transition-all` - Smooth animations
- `duration-300`, `duration-500` - Animation duration
- `hover:bg-blue-700`, `hover:text-white` - Hover states
- `rounded-lg`, `shadow-lg` - Border radius and shadows
- `opacity-50`, `opacity-75` - Opacity

## Next Steps

1. **Convert remaining sections** - Use the pattern template above
2. **Update Menu.js** - Add Tailwind styling for dropdown menus
3. **Convert slider components** - Keep existing carousel logic, update classes
4. **Update color scheme** - Customize colors in tailwind.config.js
5. **Test responsive design** - Ensure mobile/tablet/desktop views work
6. **Remove old CSS files** - Once conversion is complete

## Running the Project

```bash
npm run dev
```

The dev server runs on port 8386 (as configured in package.json).

## Tips

- Keep AOS animation attributes (`data-aos`, `data-aos-duration`)
- Preserve all event handlers and functional logic
- Extract repeated button classes to `@layer components` in globals.css
- Use custom colors from your branding in tailwind.config.js
- Test each component after conversion
