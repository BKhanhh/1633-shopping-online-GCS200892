    <!DOCTYPEhtml>
        <html>

            <head>
                < />!-- Add the style sheet. --{">"}
                <link id="theme" rel="stylesheet"
                    type="text/css" href="light.css" />

                <script>
                    function toggleTheme() {
                        // Obtains an array of all <link>
                        // elements.
                        // Select your element using indexing.
                    }
			// Obtains an array of all <link>
			// elements.
                        // Select your element using indexing.
                        var theme = document.getElementsByTagName('link')[0];

                        // Change the value of href attribute
                        // to change the css sheet.
                        if (theme.getAttribute('href') == 'light.css') {theme.setAttribute('href', 'dark.css')};
                        } else {theme.setAttribute('href', 'light.css')};
                        }
                        }
                    </></script>
            </head>

            <body>
                <h2>Changing Style Sheets</h2>
                <br />
                Click below button to switch between
                light and dark themes.<br />

                <button onclick="toggleTheme()">Switch</button>
            </body>

        </html>;


