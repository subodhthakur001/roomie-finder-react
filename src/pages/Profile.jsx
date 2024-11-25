// src/pages/Profile.jsx
import { useState } from 'react';
import { 
  User, MapPin, Phone, Mail, 
  Calendar, DollarSign, Home,
  Save, Edit2, Clock
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    location: 'Downtown Area',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    occupation: 'Software Engineer',
    budget: '1000',
    moveInDate: '2024-12-01',
    preferences: 'Non-smoker, clean, quiet, professional',
    about: 'I\'m a software engineer looking for a quiet and clean living space. I enjoy cooking and usually work from home. Looking for like-minded professionals.',
    lifestyle: {
      smoking: false,
      pets: true,
      nightOwl: false,
      earlyBird: true,
      drinking: 'social',
      cooking: true
    }
  });

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLifestyleChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      lifestyle: {
        ...prev.lifestyle,
        [field]: value
      }
    }));
  };

  const saveProfile = () => {
    // Here you would typically make an API call to save the profile
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-violet-900">My Profile</h1>
        <Button 
          onClick={() => isEditing ? saveProfile() : setIsEditing(true)}
          className="bg-violet-600 hover:bg-violet-700"
        >
          {isEditing ? (
            <><Save size={20} className="mr-2" /> Save Changes</>
          ) : (
            <><Edit2 size={20} className="mr-2" /> Edit Profile</>
          )}
        </Button>
      </div>

      <div className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="text-violet-500" />
              Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <Input
                  value={profile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  disabled={!isEditing}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-violet-500" size={20} />
                  <Input
                    value={profile.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-violet-500" size={20} />
                  <Input
                    value={profile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-violet-500" size={20} />
                  <Input
                    value={profile.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roommate Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="text-violet-500" />
              Roommate Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget ($/month)</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 text-violet-500" size={20} />
                  <Input
                    value={profile.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10"
                    type="number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Move-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 text-violet-500" size={20} />
                  <Input
                    value={profile.moveInDate}
                    onChange={(e) => handleInputChange('moveInDate', e.target.value)}
                    disabled={!isEditing}
                    className="pl-10"
                    type="date"
                  />
                </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferences</label>
              <Textarea
                value={profile.preferences}
                onChange={(e) => handleInputChange('preferences', e.target.value)}
                disabled={!isEditing}
                className="h-24"
                placeholder="Describe your preferences (e.g., non-smoker, pets, quiet hours)"
              />
            </div>
          </CardContent>
        </Card>

        {/* Lifestyle */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="text-violet-500" />
              Lifestyle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries({
                'Smoking': 'smoking',
                'Pets': 'pets',
                'Night Owl': 'nightOwl',
                'Early Bird': 'earlyBird',
                'Cooking': 'cooking'
              }).map(([label, key]) => (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={profile.lifestyle[key]}
                    onChange={(e) => handleLifestyleChange(key, e.target.checked)}
                    disabled={!isEditing}
                    className="w-4 h-4 text-violet-600"
                  />
                  <span className="text-gray-700">{label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* About Me */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="text-violet-500" />
              About Me
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={profile.about}
              onChange={(e) => handleInputChange('about', e.target.value)}
              disabled={!isEditing}
              className="h-32"
              placeholder="Tell potential roommates about yourself..."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Profile;