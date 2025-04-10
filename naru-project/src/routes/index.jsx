import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import GNB from '../components/GNB';
import Home from '../pages/Home';
import PostList from '../pages/community/PostList';
import PostDetail from '../pages/community/PostDetail';
import WritePost from '../pages/community/WritePost';
import About from '../pages/About';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';

export default function AppRoutes() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <DefaultLayout>
                        <Home />
                    </DefaultLayout>
                }
            />
            <Route
                path="/community"
                element={
                    <DefaultLayout>
                        <PostList />
                    </DefaultLayout>
                }
            />
            <Route
                path="/community/write"
                element={
                    <DefaultLayout>
                        <WritePost />
                    </DefaultLayout>
                }
            />
            <Route
                path="/community/:id"
                element={
                    <DefaultLayout>
                        <PostDetail />
                    </DefaultLayout>
                }
            />
            <Route
                path="/about"
                element={
                    <DefaultLayout>
                        <About />
                    </DefaultLayout>
                }
            />
            <Route
                path="/login"
                element={
                    <DefaultLayout>
                        <Login />
                    </DefaultLayout>
                }
            />
            <Route
                path="/signup"
                element={
                    <DefaultLayout>
                        <Signup />
                    </DefaultLayout>
                }
            />
        </Routes>
    );
}