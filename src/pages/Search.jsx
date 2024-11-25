import { useState } from 'react';
import { Search as SearchIcon, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  
  // Sample data - replace with API call
  const sampleRoommates = [
    { id: 1, name: 'Alex Chen', location: 'Downtown', preferences: 'Student, Non-smoker' },
    { id: 2, name: 'Sarah Smith', location: 'West End', preferences: 'Professional, Pet-friendly' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-3 text-violet-500" size={20} />
                <Input 
                  className="pl-10"
                  placeholder="Search by name or preferences"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-violet-500" size={20} />
                <Input 
                  className="pl-10"
                  placeholder="Enter location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700">
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {sampleRoommates.map((roommate) => (
          <Card key={roommate.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-violet-500" size={24} />
                {roommate.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} className="text-violet-500" />
                {roommate.location}
              </p>
              <p className="mt-2 text-gray-600">{roommate.preferences}</p>
              <Button className="mt-4 w-full bg-violet-600 hover:bg-violet-700">
                Contact
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Search;