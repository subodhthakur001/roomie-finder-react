import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-violet-900 mb-4">
          Find Your Perfect Roommate
        </h1>
        <p className="text-xl text-gray-600">
          Connect with people who share your lifestyle and preferences
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Create Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Set up your profile with your preferences and requirements
            </p>
            <Link to="/profile">
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Get Started
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Search Roommates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Browse through potential roommates in your area
            </p>
            <Link to="/search">
              <Button className="w-full bg-violet-600 hover:bg-violet-700">
                Search Now
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Message and connect with potential roommates
            </p>
            <Button className="w-full bg-violet-600 hover:bg-violet-700">
              View Messages
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Home;
