# 🐾 PetPal — Pet Adoption Platform
 
## Purpose
 
PetPal is a full-stack pet adoption platform built with the MERN stack that connects caring families with pets in need of a loving home. Users can explore pets available for adoption, view detailed pet profiles, and submit adoption requests. Pet owners or shelter managers can manage their listings, handle incoming adoption requests, and track the status of each pet — all in one place. The platform provides a smooth and responsive user experience while providing secure authentication and authorization mechanisms to protect private actions.
 
---

## 🌐 Live URL
 
> [https://petpal-sigma.vercel.app](https://petpal-sigma.vercel.app)
 
---

## ✨ Features
 
- **Secure Authentication** — Email/password and Google OAuth login powered by Better Auth, with middleware verification with JWT tokens stored in HTTPOnly cookies and protected private routes.
- **Browse & Search Pets** — Explore all available pets with search by name and filter by species. Only logged-in users can view pet details.
- **Full Pet Management Dashboard** — Pet owners can add, edit, and delete their pet listings from their private dashboards. Each listing shows real-time stats (total, available, adopted) and a requests modal for managing incoming adoption requests.
- **Adoption Request System** — Logged-in users can submit adoption requests with a preferred pickup date and message. Pet owners can approve or reject requests directly from a requests modal — approving one automatically rejects all others for the same pet.
- **My Requests Tracker** — Adopters can view all their submitted requests with status updates (pending / approved / rejected), pickup dates, and the ability to cancel any pending request.
- **Adoption Control & Guards** — Pet owners cannot submit adoption requests for their own pets. Pets marked as adopted are locked from further requests and custom cards for pending, approved, and rejected requests are displayed in the pet details page when requester is logged-in. Unauthenticated users are redirected to login.
- **Dark & Light Theme** — Full dark & light mode support across all pages using next-themes and Tailwind CSS classes, with a toggle button in the navbar.
- **Responsive Design** — Fully responsive layout across mobile, tablet, and desktop with a collapsible mobile menu, adaptive dashboard sidebar, and fluid grid layouts.
---

## 📦 NPM Packages Used

### Frontend

```bash
next.js
react
@heroui/react
better-auth
mongodb
tailwindcss
next-themes
react-toastify
lucide-react
```

### Backend 

```bash
express
mongodb
cors
jwt 
dotenv
```