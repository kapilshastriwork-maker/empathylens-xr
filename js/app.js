/**
 * EmpathyLens XR - Main Application Logic
 * Handles URL parameter parsing, localStorage, and condition display
 */

// Condition data configuration
const conditionData = {
  dementia: {
    name: 'Dementia',
    icon: '🧠',
    description: 'Experience memory loss, confusion, and disorientation. See the world through the eyes of someone struggling with cognitive decline.',
    duration: '5-10 min',
    difficulty: 'Intermediate',
    outcome: 'Empathy & Patience'
  },
  parkinsons: {
    name: "Parkinson's",
    icon: '🫀',
    description: "Feel tremors, stiffness, and movement difficulties. Understand the daily challenges faced by Parkinson's patients.",
    duration: '8-12 min',
    difficulty: 'Advanced',
    outcome: 'Motor Empathy'
  },
  anxiety: {
    name: 'Anxiety Disorder',
    icon: '😰',
    description: 'Understand overwhelming worry and physical symptoms. Experience what anxiety feels like from the inside.',
    duration: '5-8 min',
    difficulty: 'Beginner',
    outcome: 'Emotional Understanding'
  }
};

/**
 * Get URL parameter by name
 * @param {string} paramName - The parameter name to retrieve
 * @returns {string|null} - The parameter value or null if not found
 */
function getUrlParam(paramName) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(paramName);
}

/**
 * Update the page content based on the active condition
 * @param {string} condition - The condition key (dementia, parkinsons, anxiety)
 */
function updateConditionDisplay(condition) {
  const data = conditionData[condition];
  
  if (!data) {
    console.warn(`Unknown condition: ${condition}`);
    return;
  }

  // Update page title
  document.getElementById('condition-title').textContent = `${data.name} Experience`;
  
  // Update badge
  document.getElementById('condition-icon').textContent = data.icon;
  document.getElementById('condition-name').textContent = data.name;
  
  // Update description
  document.getElementById('experience-description').textContent = data.description;
  
  // Update info cards
  document.getElementById('info-duration').textContent = data.duration;
  document.getElementById('info-difficulty').textContent = data.difficulty;
  document.getElementById('info-outcome').textContent = data.outcome;
}

/**
 * Initialize the application
 */
function init() {
  // Check if we're on the experience page
  const isExperiencePage = document.getElementById('condition-title');
  
  if (isExperiencePage) {
    // Read the condition from URL parameter
    const condition = getUrlParam('condition');
    
    if (condition) {
      // Store in localStorage
      localStorage.setItem('activeCondition', condition);
      
      // Log the active condition
      console.log('Active condition:', condition);
      
      // Update the display
      updateConditionDisplay(condition);
    } else {
      // Check if there's a stored condition
      const storedCondition = localStorage.getItem('activeCondition');
      
      if (storedCondition) {
        console.log('Active condition (from storage):', storedCondition);
        updateConditionDisplay(storedCondition);
      } else {
        console.log('No condition selected');
        document.getElementById('condition-title').textContent = 'Select a Condition';
      }
    }
  }
}

// Run initialization when DOM is ready
document.addEventListener('DOMContentLoaded', init);
