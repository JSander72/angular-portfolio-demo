# Angular Portfolio Demo - Pokémon Dashboard

A modern Angular application showcasing a comprehensive Pokémon dashboard with search and browsing capabilities. Built with Angular 20.3.2 using standalone components and the latest Angular features.

## 🚀 Features

### Pokémon Dashboard
- **Quick Search**: Instant Pokémon lookup by name with detailed information
- **Browse All**: Paginated table view of all Pokémon with sprites
- **Real-time Filtering**: Search through loaded Pokémon as you type
- **Responsive Design**: Clean, professional UI that works on all devices

### Technical Highlights
- ✅ **Standalone Components**: Modern Angular architecture without NgModules
- ✅ **HTTP Client with Fetch**: Optimized for performance and SSR compatibility
- ✅ **Reactive Forms**: Two-way data binding with FormsModule
- ✅ **Routing**: Angular Router with lazy loading ready
- ✅ **TypeScript**: Full type safety with custom interfaces
- ✅ **RxJS**: Reactive programming with Observables and operators

## 🛠️ Architecture

### Components
- **App Component**: Main application shell with navigation
- **Dashboard Component**: Feature-rich Pokémon browser and search

### Services
- **PokemonService**: Comprehensive API service with:
  - Single Pokémon fetch by name/ID
  - Paginated list retrieval with metadata
  - Bulk fetch operations using forkJoin
  - Optimized sprite URLs for fast loading

### API Integration
- **PokéAPI**: RESTful integration with https://pokeapi.co
- **Error Handling**: Graceful fallbacks and user feedback
- **Loading States**: Real-time UI feedback during API calls

## 🎯 Live Features

1. **Quick Pokémon Search**
   - Enter any Pokémon name for instant details
   - Displays name, sprite, height, and weight
   - Error handling for invalid names

2. **Pokémon Browser Table**
   - Paginated view (10 per page, configurable)
   - Search/filter within current page
   - Click "View" for detailed information (ready for expansion)
   - Professional table layout with sprites

3. **Navigation & UX**
   - Clean header navigation
   - Disabled button states for better UX
   - Responsive design with horizontal scroll on mobile
   - Loading indicators and error states

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 📁 Project Structure

```
src/
├── app/
│   ├── pages/
│   │   └── dashboard/          # Main dashboard component
│   │       ├── dashboard.ts    # Component logic
│   │       ├── dashboard.html  # Template
│   │       └── dashboard.css   # Styles
│   ├── pokemon.service.ts      # API service layer
│   ├── app.ts                  # Root component (standalone)
│   ├── app.routes.ts           # Route configuration
│   ├── app.config.ts           # App configuration
│   └── main.ts                 # Bootstrap
```

## 🚀 Getting Started

### Prerequisites
- Node.js (18+ recommended)
- Angular CLI (`npm install -g @angular/cli`)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd angular-portfolio-demo

# Install dependencies
npm install

# Start development server
ng serve
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## 🔧 Available Scripts

### Building
```bash
ng build                    # Production build
ng build --watch           # Development build with watch mode
```

### Testing
```bash
ng test                    # Run unit tests
ng e2e                     # Run end-to-end tests (when configured)
```

### Code Generation
```bash
ng generate component component-name    # Generate new component
ng generate service service-name        # Generate new service
ng generate --help                      # See all available schematics
```

## 🎨 Customization

### Adding New Routes
Update `src/app/app.routes.ts` to add new pages:
```typescript
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'new-page', component: NewPageComponent }, // Add here
  { path: '**', redirectTo: 'dashboard' }
];
```

### Extending the PokemonService
The service supports multiple operations:
```typescript
// Single Pokémon
getPokemon(name: string): Observable<any>

// Paginated list
getPokemonList(limit: number, offset: number): Observable<{...}>

// Bulk fetch
getMany(ids: number[]): Observable<any[]>
```

## 🌟 Future Enhancements

- [ ] Pokémon detail pages with full stats
- [ ] Favorite Pokémon system with local storage
- [ ] Advanced filtering (by type, generation, etc.)
- [ ] Pokémon comparison feature
- [ ] Dark/light theme toggle
- [ ] Progressive Web App (PWA) features

## 📚 Technologies Used

- **Angular 20.3.2** - Modern web framework
- **TypeScript** - Type-safe JavaScript
- **RxJS** - Reactive programming
- **PokéAPI** - RESTful Pokémon data
- **CSS3** - Modern styling with Flexbox/Grid

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
