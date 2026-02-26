from django.test import TestCase, Client
from django.http import JsonResponse

class TestJsonResponse(TestCase):
    """Test suite for JSON response functionality."""

    def setUp(self):
        """Set up test client."""
        self.client = Client()

    def test_json_response_returned(self):
        """Test that a JSON response is returned."""
        response = JsonResponse({"message": "success"})
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response["Content-Type"], "application/json")
        self.assertIn("message", response.content.decode())