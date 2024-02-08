import './styles/styles.scss';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './views/App';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ToDoList } from './views/components/pages/ToDoList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="/todo-list" element={<ToDoList />}></Route>
      <Route path="*" element={<div>This route does not exist 404</div>} />
    </>,
  ),
);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
