
        // Goals
        const goals = {
            steps: 10000,
            calories: 2000,
            water: 8,
            sleep: 8
        };

        // Set current date
        document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Quick add function
        function quickAdd(metric, amount) {
            const input = document.getElementById(metric + 'Input');
            const currentValue = parseFloat(input.value) || 0;
            input.value = currentValue + amount;
            updateProgress(metric);
        }

        // Update progress bars
        function updateProgress(metric) {
            const input = document.getElementById(metric + 'Input');
            const progressBar = document.getElementById(metric + 'Progress');
            const progressText = document.getElementById(metric + 'Text');
            
            const current = parseFloat(input.value) || 0;
            const goal = goals[metric];
            const percentage = Math.min((current / goal) * 100, 100);
            
            progressBar.style.width = percentage + '%';
            progressText.textContent = Math.round(percentage) + '% complete';
        }

        // Reset all values
        function resetAll() {
            const inputs = ['stepsInput', 'caloriesInput', 'waterInput', 'sleepInput'];
            inputs.forEach(inputId => {
                document.getElementById(inputId).value = '';
                const metric = inputId.replace('Input', '');
                updateProgress(metric);
            });
        }

        // Initialize progress bars
        ['steps', 'calories', 'water', 'sleep'].forEach(metric => {
            updateProgress(metric);
        });

        // Add some sample data to weekly summary on page load
        function updateWeeklySummary() {
            // Simulate some random weekly data
            const weeklyData = {
                steps: Math.floor(Math.random() * 3000) + 7000,
                calories: Math.floor(Math.random() * 400) + 1600,
                water: Math.floor(Math.random() * 30) / 10 + 6,
                sleep: Math.floor(Math.random() * 20) / 10 + 6.5
            };

            document.getElementById('avgSteps').textContent = weeklyData.steps.toLocaleString();
            document.getElementById('avgCalories').textContent = weeklyData.calories.toLocaleString();
            document.getElementById('avgWater').textContent = weeklyData.water.toFixed(1);
            document.getElementById('avgSleep').textContent = weeklyData.sleep.toFixed(1) + 'h';
        }

        // Update weekly summary on page load
        updateWeeklySummary();
