 document.addEventListener("DOMContentLoaded", () => { 
        const quotes = [
                { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
                { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
                { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
                { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
                { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
                { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
                { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
                { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" }
            ];

            let currentIndex = localStorage.getItem('currentIndex') ? parseInt(localStorage.getItem('currentIndex')) : 0;  
        function displayQuote(){ 
            const currentQuote = quotes[currentIndex]; 
            document.getElementById('quote').innerText = `"${currentQuote.quote}"`;
            document.getElementById('author').innerText = `- ${currentQuote.author}`;
            currentIndex++;
            
            if(currentIndex >= quotes.length){
                currentIndex = 0; 
            }

            localStorage.setItem('currentIndex', currentIndex); 
        }
 displayQuote();
 })
