/**
 * Recipe Editor JavaScript
 * Handles dynamic form interactions for the recipe editor page
 */

// ============================================================================
// RECIPE TITLE UPDATE
// ============================================================================

const recipeTitle = document.getElementById('recipeTitle');
const recipeSubtitle = document.getElementById('recipeSubtitle');

if (recipeTitle) {
    recipeTitle.addEventListener('input', (e) => {
        recipeSubtitle.textContent = e.target.value || 'Untitled Recipe';
    });
}

// ============================================================================
// IMAGE UPLOAD HANDLING
// ============================================================================

const imageUploadZone = document.getElementById('imageUploadZone');
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const previewImg = document.getElementById('previewImg');
const removeImageBtn = document.getElementById('removeImageBtn');

if (imageUploadZone && imageUpload) {
    // Click to upload
    imageUploadZone.addEventListener('click', () => imageUpload.click());

    // Handle file selection
    imageUpload.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            displayImage(file);
        }
    });

    // Drag and drop
    imageUploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        imageUploadZone.classList.add('dragover');
    });

    imageUploadZone.addEventListener('dragleave', () => {
        imageUploadZone.classList.remove('dragover');
    });

    imageUploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        imageUploadZone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            imageUpload.files = e.dataTransfer.files;
            displayImage(file);
        }
    });

    // Remove image
    if (removeImageBtn) {
        removeImageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            imageUpload.value = '';
            imagePreview.style.display = 'none';
            imageUploadZone.style.display = 'flex';
        });
    }
}

function displayImage(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        previewImg.src = e.target.result;
        imagePreview.style.display = 'block';
        imageUploadZone.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// ============================================================================
// INGREDIENTS LIST MANAGEMENT
// ============================================================================

const addIngredientBtn = document.getElementById('addIngredientBtn');
const ingredientsList = document.getElementById('ingredientsList');

if (addIngredientBtn && ingredientsList) {
    addIngredientBtn.addEventListener('click', () => {
        addIngredientRow();
    });

    // Add event listeners to initial ingredient row
    updateIngredientRowListeners();
}

function createIngredientRow() {
    const row = document.createElement('div');
    row.className = 'ingredient-row';
    row.innerHTML = `
        <input type="number" class="ingredient-qty" placeholder="Qty" value="1">
        <select class="ingredient-unit">
            <option>cup</option>
            <option>tbsp</option>
            <option>tsp</option>
            <option>ml</option>
            <option>g</option>
            <option>oz</option>
            <option>lb</option>
            <option>pinch</option>
        </select>
        <input type="text" class="ingredient-name" placeholder="e.g., all-purpose flour">
        <button type="button" class="ingredient-delete-btn" style="opacity: 0;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
        </button>
    `;
    return row;
}

function addIngredientRow() {
    const newRow = createIngredientRow();
    ingredientsList.appendChild(newRow);
    attachIngredientRowListener(newRow);
}

function updateIngredientRowListeners() {
    const rows = ingredientsList.querySelectorAll('.ingredient-row');
    rows.forEach((row) => {
        attachIngredientRowListener(row);
    });
}

function attachIngredientRowListener(row) {
    const deleteBtn = row.querySelector('.ingredient-delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.preventDefault();
            row.remove();
        });
    }
}

// ============================================================================
// INSTRUCTIONS LIST MANAGEMENT
// ============================================================================

const addInstructionBtn = document.getElementById('addInstructionBtn');
const instructionsList = document.getElementById('instructionsList');

if (addInstructionBtn && instructionsList) {
    addInstructionBtn.addEventListener('click', () => {
        addInstructionRow();
    });

    // Update numbering and listeners for initial row
    updateInstructionRows();
}

function createInstructionRow() {
    const row = document.createElement('div');
    row.className = 'instruction-row';
    row.innerHTML = `
        <div class="instruction-number">1</div>
        <div class="instruction-content">
            <textarea
                class="instruction-textarea"
                placeholder="Describe this step..."
                rows="2"
            ></textarea>
            <div class="instruction-options">
                <input type="number" class="instruction-timer" placeholder="Timer (min)" min="0">
                <button type="button" class="instruction-image-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    Add image
                </button>
            </div>
        </div>
        <button type="button" class="instruction-delete-btn" style="opacity: 0;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
            </svg>
        </button>
    `;
    return row;
}

function addInstructionRow() {
    const newRow = createInstructionRow();
    instructionsList.appendChild(newRow);
    updateInstructionRows();
}

function updateInstructionRows() {
    const rows = instructionsList.querySelectorAll('.instruction-row');
    rows.forEach((row, index) => {
        // Update step number
        const stepNumber = row.querySelector('.instruction-number');
        stepNumber.textContent = index + 1;

        // Attach delete listener
        const deleteBtn = row.querySelector('.instruction-delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault();
                row.remove();
                updateInstructionRows();
            });
        }

        // Attach image button listener (placeholder)
        const imageBtn = row.querySelector('.instruction-image-btn');
        if (imageBtn) {
            imageBtn.addEventListener('click', (e) => {
                e.preventDefault();
                // Placeholder: in real app, would open image upload modal
                alert('Image upload for steps coming soon');
            });
        }
    });
}

// ============================================================================
// NUTRITION FACTS COLLAPSIBLE
// ============================================================================

const nutritionToggle = document.getElementById('nutritionToggle');
const nutritionContent = document.getElementById('nutritionContent');

if (nutritionToggle && nutritionContent) {
    nutritionToggle.addEventListener('click', () => {
        const isExpanded = nutritionToggle.getAttribute('aria-expanded') === 'true';
        nutritionToggle.setAttribute('aria-expanded', !isExpanded);
        nutritionContent.style.display = isExpanded ? 'none' : 'flex';
    });
}

// ============================================================================
// ACTION BUTTONS
// ============================================================================

const saveDraftBtn = document.getElementById('saveDraftBtn');
const previewBtn = document.getElementById('previewBtn');
const publishBtn = document.getElementById('publishBtn');

if (saveDraftBtn) {
    saveDraftBtn.addEventListener('click', () => {
        const data = gatherRecipeData();
        console.log('Saving draft:', data);
        alert('Recipe saved as draft');
    });
}

if (previewBtn) {
    previewBtn.addEventListener('click', () => {
        const data = gatherRecipeData();
        console.log('Previewing recipe:', data);
        alert('Recipe preview coming soon');
    });
}

if (publishBtn) {
    publishBtn.addEventListener('click', () => {
        const data = gatherRecipeData();
        if (!data.title || !data.ingredients.length || !data.instructions.length) {
            alert('Please fill in at least a title, one ingredient, and one instruction');
            return;
        }
        console.log('Publishing recipe:', data);
        alert('Recipe published!');
    });
}

function gatherRecipeData() {
    const ingredients = [];
    document.querySelectorAll('.ingredient-row').forEach((row) => {
        const qty = row.querySelector('.ingredient-qty').value;
        const unit = row.querySelector('.ingredient-unit').value;
        const name = row.querySelector('.ingredient-name').value;
        if (name) {
            ingredients.push({ qty, unit, name });
        }
    });

    const instructions = [];
    document.querySelectorAll('.instruction-row').forEach((row) => {
        const text = row.querySelector('.instruction-textarea').value;
        const timer = row.querySelector('.instruction-timer').value;
        if (text) {
            instructions.push({ text, timer: timer ? parseInt(timer) : null });
        }
    });

    return {
        title: document.getElementById('recipeTitle').value,
        description: document.getElementById('recipeDescription').value,
        prepTime: document.getElementById('prepTime').value,
        cookTime: document.getElementById('cookTime').value,
        servings: document.getElementById('servings').value,
        difficulty: document.getElementById('difficulty').value,
        category: document.getElementById('category').value,
        tags: document.getElementById('tags').value,
        sourceUrl: document.getElementById('sourceUrl').value,
        calories: document.getElementById('calories').value,
        protein: document.getElementById('protein').value,
        carbs: document.getElementById('carbs').value,
        fat: document.getElementById('fat').value,
        ingredients,
        instructions,
    };
}
