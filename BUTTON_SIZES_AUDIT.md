# Button Sizing Audit & Standardization Guide

## 📊 Current Button Variations Found

### Base Button Classes (in `globals.css`)

```css
.btn-primary   → px-6 py-2.5 (default)
.btn-secondary → px-6 py-2.5 (default)
.btn-outline-white → px-6 py-2.5 (default)
.btn-white → px-6 py-2.5 (default)
.btn-sm → px-4 py-1.5 text-sm (small variant)
```

### Inline Overrides Currently Used (42 instances found)

| Padding        | Height | Text Size   | Count    | Status      | Used In                  |
| -------------- | ------ | ----------- | -------- | ----------- | ------------------------ |
| `px-8 py-3.5`  | 56px   | `text-base` | **21x**  | MOST COMMON | Hero sections, main CTAs |
| `px-7 py-3`    | 48px   | `text-base` | **12x**  | COMMON      | Secondary CTAs, forms    |
| `px-8 py-3`    | 48px   | `text-base` | **5x**   | FREQUENT    | Page sections            |
| `px-8 py-3.5`  | 56px   | `text-base` | **4x**   | COMMON      | Featured buttons         |
| `px-10 py-3.5` | 56px   | `text-base` | **2-3x** | RARE        | Extra wide buttons       |
| `px-8 py-3`    | 48px   | `text-lg`   | **2-3x** | RARE        | Prominent sections       |
| `px-7 py-3`    | 48px   | None        | **2x**   | RARE        | Icon buttons             |
| Base           | 42px   | -           | Used     | DEFAULT     | Navbar mentions          |
| `px-4 py-1.5`  | 32px   | `text-sm`   | Used     | SMALL       | Mini buttons             |

---

## 🎯 Recommended Standard Button Sizes

### 3 Core Sizes (Simplified System)

```
1. SMALL (Mobile/Secondary)
   Padding: px-5 py-2
   Height: ~40px
   Text: text-sm
   Use: Secondary actions, mobile nav, badges
   Class: .btn-sm

2. MEDIUM (Default/Primary)
   Padding: px-6 py-2.5 ← ALREADY YOUR DEFAULT
   Height: ~42px
   Text: (inherit)
   Use: Standard buttons, regular CTAs
   Class: .btn-primary, .btn-secondary, etc.

3. LARGE (Hero/Main CTA)
   Padding: px-8 py-3.5
   Height: ~56px
   Text: text-base
   Use: Hero sections, main call-to-actions
   Class: .btn-lg (NEW)

4. EXTRA LARGE (Optional - Hero Emphasis)
   Padding: px-10 py-4
   Height: ~64px
   Text: text-lg
   Use: Very prominent CTAs
   Class: .btn-xl (NEW)
```

---

## 📍 Where Each Size Is Currently Used

### Size 1: `px-8 py-3.5` (56px height) - **HERO/MAIN CTA**

**Count: 21 instances** ✓ Most common

- ✅ Keep this for hero sections and main CTAs

**Pages/Components:**

- `src/app/air-conditioning/page.tsx` (lines 205, 211, 585)
- `src/app/repiping-services/page.tsx` (lines 117, 123)
- `src/app/services/furnace/page.tsx` (lines 114, 120, 307)
- `src/app/water-treatment-services/page.tsx` (lines 126, 132)
- `src/app/services/ac/page.tsx` (lines 212, 219)
- `src/app/water-heater-services/page.tsx` (lines 118, 124)
- `src/app/page.tsx` (lines 303, 310)
- `src/app/plumbing/page.tsx` (lines 196, 202, 453, 460)
- `src/app/products/page.tsx` (lines 159, 165)
- `src/app/plumbing-repair-services/page.tsx` (lines 127, 133, 425)
- `data/page.tsx` (lines 153, 159, 531)

---

### Size 2: `px-7 py-3` (48px height) - **SECONDARY CTA**

**Count: 12 instances** ✓ Common

**Pages/Components:**

- `src/components/CTABanner.tsx` (lines 48, 56)
- `src/components/PageCTA.tsx` (line 31)
- `src/app/page.tsx` (lines 458, 569, 655, 712, 871, 880)
- `src/app/hvac/page.tsx` (lines 53, 58)
- `src/app/service-areas/page.tsx` (line 218)
- `src/app/contact/page.tsx` (line 55)
- `src/app/schedule-us/page.tsx` (line 54)

---

### Size 3: `px-8 py-3` (48px height) - **STANDARD CTA**

**Count: 5 instances**

**Pages/Components:**

- `src/app/page.tsx` (lines 303, 310, 458, 569, 655, 712, 871)

---

### Mixed/Conflicting Usage

- `text-lg py-3 px-8` (3 instances) - Inconsistent
- `px-10 py-3.5` (2-3 instances) - Too wide, not needed
- `py-3 px-7` without text-size (2 instances) - Missing text size definition

---

## ✅ Implementation Plan

### Step 1: Add New Button Size Classes (in `globals.css`)

```css
.btn-lg {
  @apply px-8 py-3 text-base; /* 48px height */
}

.btn-xl {
  @apply px-10 py-4 text-lg; /* 64px height - optional */
}
```

### Step 2: Replace Inline Overrides

**Before:**

```tsx
<Link href="/contact" className="btn-primary text-base py-3.5 px-8">
  Book Appointment
</Link>
```

**After:**

```tsx
<Link href="/contact" className="btn-primary btn-lg">
  Book Appointment
</Link>
```

### Step 3: Standardization Rules

- ✅ Use `.btn-primary`, `.btn-secondary`, etc. for color/style
- ✅ Use `.btn-lg` or `.btn-sm` for size variants
- ❌ Don't add custom `py-` `px-` classes to buttons anymore
- ❌ Don't mix `text-base` + `text-lg` - let button size class handle it

---

## 📋 Pages That Need Updates

Total instances: **42**

### High Priority (Most instances)

1. **`src/app/page.tsx`** - 8 instances
2. **`data/page.tsx`** - 3 instances (hero buttons)
3. **`src/app/plumbing/page.tsx`** - 4 instances
4. **`src/app/products/page.tsx`** - 2 instances
5. **`src/app/plumbing-repair-services/page.tsx`** - 3 instances

### Medium Priority

6. `src/app/air-conditioning/page.tsx` - 3 instances
7. `src/app/repiping-services/page.tsx` - 2 instances
8. `src/app/services/furnace/page.tsx` - 3 instances
9. `src/app/water-treatment-services/page.tsx` - 2 instances
10. `src/app/services/ac/page.tsx` - 2 instances
11. `src/app/water-heater-services/page.tsx` - 2 instances

### Low Priority (1-2 instances)

- `src/components/CTABanner.tsx` - 2 instances
- `src/components/PageCTA.tsx` - 1 instance
- `src/app/hvac/page.tsx` - 2 instances
- `src/app/contact/page.tsx` - 1 instance
- `src/app/schedule-us/page.tsx` - 1 instance

---

## 🎨 Final Button Size Reference

```
┌─────────────────────────────────────────────────────────┐
│  SMALL (.btn-sm)          py-2 px-5  text-sm  → 40px   │
├─────────────────────────────────────────────────────────┤
│  MEDIUM (default)         py-2.5 px-6          → 42px   │
├─────────────────────────────────────────────────────────┤
│  LARGE (.btn-lg)          py-3 px-8   text-base → 48px  │
├─────────────────────────────────────────────────────────┤
│  EXTRA LARGE (.btn-xl)    py-4 px-10  text-lg  → 64px   │
└─────────────────────────────────────────────────────────┘
```

---

## 💾 Quick Copy-Paste Reference

### When to use `.btn-lg`

```tsx
// Hero sections - featured CTAs
<Link href="/contact" className="btn-primary btn-lg">
  Schedule Service Today
</Link>

// With icons
<a href="tel:3858656749" className="btn-outline-white btn-lg">
  <Phone className="w-4 h-4" />
  Call Now
</a>
```

### When to use default (no size modifier)

```tsx
// Secondary buttons, navbar items
<button className="btn-ghost">Learn More</button>
```

### When to use `.btn-sm`

```tsx
// Mobile actions, badges, pills
<button className="btn-secondary btn-sm">Add to Cart</button>
```

---

## 📝 Documentation Saved

- File: `/BUTTON_SIZES_AUDIT.md` (this file)
- Last updated: Now
- Status: Ready for implementation
