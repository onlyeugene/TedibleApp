document.getElementById('visitor-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const visitorName = document.getElementById('visitor-name').value;
    const responseContainer = document.getElementById('response-container');
    const clientIpElement = document.getElementById('client-ip');
    const locationElement = document.getElementById('location');
    const greetingElement = document.getElementById('greeting');
  
    try {
      const response = await fetch(`http://localhost:3000/api/hello?visitor_name=${encodeURIComponent(visitorName)}`);
      const data = await response.json();
  
      clientIpElement.textContent = data.client_ip;
      locationElement.textContent = data.location;
      greetingElement.textContent = data.greeting;
      
      responseContainer.classList.remove('hidden');
    } catch (error) {
      console.error('Error fetching the API:', error);
      clientIpElement.textContent = 'Error';
      locationElement.textContent = 'Error';
      greetingElement.textContent = 'An error occurred while fetching the API. Please try again.';
      
      responseContainer.classList.remove('hidden');
    }
  });
  