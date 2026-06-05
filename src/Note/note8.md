📏 Tailwind Spacing Scale (default):
Tailwind CSS ke scale mein:

mt-10 = margin-top: 2.5rem → 40px

mt-16 = margin-top: 4rem → 64px

✅ Quick Reference:
| Class   | rem Value | Pixel Value |
| ------- | --------- | ----------- |
| `mt-1`  | 0.25rem   | 4px         |
| `mt-2`  | 0.5rem    | 8px         |
| `mt-4`  | 1rem      | 16px        |
| `mt-8`  | 2rem      | 32px        |
| `mt-10` | 2.5rem    | **40px**    |
| `mt-16` | 4rem      | **64px**    |
| `mt-24` | 6rem      | 96px        |

Agar aapko kabhi bhi mt-X ka exact pixel value samajhna ho, to formula yaad rakho:

1rem = 16px (by default)
mt-X = X × 0.25rem
For example: mt-12 = 3rem = 48px

mt-X = 12 * 0.25 = 3rem = 48px

| Class   | rem | px   | Area Applied |
| ------- | --- | ---- | ------------ |
| `py-4`  | 1   | 16px | Top + Bottom |
| `py-10` | 2.5 | 40px | Top + Bottom |
| `px-4`  | 1   | 16px | Left + Right |
| `pt-4`  | 1   | 16px | Top only     |
| `pb-4`  | 1   | 16px | Bottom only  |
