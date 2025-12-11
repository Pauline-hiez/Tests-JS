class DigitalBookReader {
    constructor() {
        this.currentSpread = 0;
        this.totalPages = 0;
        this.pages = [];
        this.isAnimating = false;

        this.book = document.getElementById("book");
        this.currentSpreadEl = document.getElementById("currentSpread");
        this.leftPageContent = document.getElementById("leftPageContent");
        this.rightPageContent = document.getElementById("rightPageContent");
        this.leftPageNumber = document.getElementById("leftPageNumber");
        this.rightPageNumber = document.getElementById("rightPageNumber");
        this.pageIndicator = document.getElementById("pageIndicator");
        this.brightnessSlider = document.getElementById("brightness");
        this.fontSizeSlider = document.getElementById("font-size");
        this.bookContainer = document.getElementById("bookContainer");
        this.prevArea = document.getElementById("prevArea");
        this.nextArea = document.getElementById("nextArea");
        this.measurementContainer = document.getElementById("measurementContainer");

        this.bookElements = this.parseBookContent();
        this.initializeEventListeners();

        setTimeout(() => {
            this.repaginateContent();
        }, 100);
    }

    parseBookContent() {
        const content = [
            { type: "h1", content: "The Art of Digital Reading" },
            {
                type: "p",
                content:
                    "In the realm of modern literature consumption, digital reading has revolutionized how we interact with text."
            },
            {
                type: "p",
                content:
                    "The evolution from traditional paper books to electronic formats represents one of the most significant shifts in human information processing since the invention of the printing press."
            },
            {
                type: "p",
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                type: "p",
                content:
                    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                type: "p",
                content:
                    "Digital reading platforms offer unprecedented control over the reading experience."
            },
            {
                type: "p",
                content:
                    "Users can adjust text size, modify background colors, and even alter font styles to match their preferences and reading conditions."
            },
            {
                type: "p",
                content:
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            },
            {
                type: "p",
                content:
                    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                type: "p",
                content:
                    "The transition to digital reading has not been without its challenges."
            },
            {
                type: "p",
                content:
                    "Many readers initially resisted the change, preferring the tactile experience of physical books."
            },
            {
                type: "p",
                content:
                    "However, the convenience and accessibility of digital formats have gradually won over even the most traditional bibliophiles."
            },
            { type: "h2", content: "Chapter 1: The Reading Revolution" },
            {
                type: "p",
                content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            },
            {
                type: "p",
                content:
                    "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            },
            {
                type: "p",
                content:
                    "Modern e-readers simulate the experience of turning pages through sophisticated animations and haptic feedback."
            },
            {
                type: "p",
                content:
                    "These technological innovations bridge the gap between digital and physical reading experiences."
            },
            {
                type: "p",
                content:
                    "The ability to carry thousands of books in a single device has transformed travel reading."
            },
            {
                type: "p",
                content:
                    "This innovation has made literature more accessible to people with limited physical storage space."
            },
            {
                type: "p",
                content:
                    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            },
            {
                type: "p",
                content:
                    "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            },
            {
                type: "p",
                content:
                    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
            },
            {
                type: "p",
                content:
                    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti."
            },
            {
                type: "p",
                content:
                    "Atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
            },
            { type: "h2", content: "Chapter 2: Interactive Features" },
            {
                type: "p",
                content:
                    "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
            },
            {
                type: "p",
                content: "Et harum quidem rerum facilis est et expedita distinctio."
            },
            {
                type: "p",
                content:
                    "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit."
            },
            {
                type: "p",
                content:
                    "Digital books offer interactive features that enhance the reading experience beyond what traditional books can provide."
            },
            {
                type: "p",
                content:
                    "Hyperlinks, embedded multimedia, and instant dictionary access create a more immersive and educational environment."
            },
            {
                type: "p",
                content:
                    "Cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est."
            },
            {
                type: "p",
                content:
                    "Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet."
            },
            {
                type: "p",
                content:
                    "Annotation tools allow readers to highlight passages, add notes, and share insights with other readers in real-time."
            },
            {
                type: "p",
                content:
                    "This social aspect of reading creates virtual book clubs and discussion forums that span the globe."
            },
            {
                type: "p",
                content:
                    "Personalization features adapt to individual reading habits, suggesting related content."
            },
            {
                type: "p",
                content:
                    "These systems track reading progress across multiple devices seamlessly."
            },
            { type: "h2", content: "Chapter 3: Accessibility and Inclusion" },
            {
                type: "p",
                content:
                    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam."
            },
            {
                type: "p",
                content:
                    "Nisi ut aliquid ex ea commodi consequatur, quis autem vel eum iure reprehenderit."
            },
            {
                type: "p",
                content:
                    "Qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."
            },
            {
                type: "p",
                content:
                    "Digital reading platforms have made literature more accessible to readers with visual impairments and learning disabilities."
            },
            {
                type: "p",
                content:
                    "Text-to-speech functionality, customizable font sizes, and high-contrast modes ensure that everyone can enjoy reading."
            },
            {
                type: "p",
                content:
                    "The global reach of digital publishing has democratized access to literature."
            },
            {
                type: "p",
                content:
                    "Readers in remote areas can now access the same content as those in major metropolitan centers."
            },
            {
                type: "p",
                content:
                    "Multi-language support and instant translation features have broken down linguistic barriers."
            },
            {
                type: "p",
                content:
                    "These innovations have made world literature more accessible than ever before."
            },
            {
                type: "p",
                content: "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
            },
            {
                type: "p",
                content:
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
            },
            { type: "h2", content: "Conclusion: The Future of Reading" },
            {
                type: "p",
                content:
                    "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
            },
            {
                type: "p",
                content:
                    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
            },
            {
                type: "p",
                content:
                    "As we look toward the future, digital reading continues to evolve with emerging technologies."
            },
            {
                type: "p",
                content:
                    "Augmented reality, artificial intelligence, and virtual reality promise even more immersive reading experiences."
            },
            {
                type: "p",
                content:
                    "The convergence of reading with other media forms creates new storytelling possibilities."
            },
            {
                type: "p",
                content:
                    "These innovations blur the lines between books, games, and interactive experiences."
            },
            {
                type: "p",
                content:
                    "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
            },
            {
                type: "p",
                content:
                    "I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."
            },
            {
                type: "p",
                content:
                    "While digital reading will continue to advance, the fundamental human desire for stories and knowledge remains constant."
            },
            {
                type: "p",
                content:
                    "This ensures that reading, in whatever form, will always be an essential part of human culture."
            },
            {
                type: "p",
                content:
                    "The master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself."
            },
            {
                type: "p",
                content:
                    "Because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences."
            },
            {
                type: "p",
                content:
                    "These consequences can be extremely painful when not properly considered."
            },
            {
                type: "p",
                content:
                    "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled."
            },
            {
                type: "p",
                content:
                    "They are demoralized by the charms of pleasure of the moment, so blinded by desire."
            },
            {
                type: "p",
                content:
                    "That they cannot foresee the pain and trouble that are bound to ensue."
            },
            {
                type: "p",
                content:
                    "In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best."
            },
            {
                type: "p",
                content:
                    "Every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty."
            },
            {
                type: "p",
                content:
                    "Or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted."
            },
            {
                type: "p",
                content:
                    "The wise man therefore always holds in these matters to this principle of selection."
            },
            {
                type: "p",
                content: "~ The End ~",
                style:
                    "text-align: center; margin-top: 40px; font-style: italic; font-size: 1.3em;"
            }
        ];
        return content;
    }

    initializeEventListeners() {
        this.prevArea.addEventListener("click", () => this.prevSpread());
        this.nextArea.addEventListener("click", () => this.nextSpread());

        this.brightnessSlider.addEventListener("input", (e) =>
            this.adjustBrightness(e.target.value)
        );
        this.fontSizeSlider.addEventListener("input", (e) => {
            this.adjustFontSize(e.target.value);
            setTimeout(() => this.repaginateContent(), 50);
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "ArrowLeft") this.prevSpread();
            if (e.key === "ArrowRight") this.nextSpread();
        });
    }

    repaginateContent() {
        this.pages = [];
        const maxHeight = this.getMaxPageHeight() - 100;

        this.measurementContainer.style.fontSize =
            getComputedStyle(this.bookContainer).getPropertyValue("--font-size") ||
            "16px";
        this.measurementContainer.style.color =
            getComputedStyle(this.bookContainer).getPropertyValue("--text-color") ||
            "#2c2c2c";

        let currentPageElements = [];
        let currentPageHeight = 0;

        for (const element of this.bookElements) {
            const elementHeight = this.measureElementHeight(element);

            if (elementHeight > maxHeight) {
                if (currentPageElements.length > 0) {
                    this.pages.push([...currentPageElements]);
                    currentPageElements = [];
                    currentPageHeight = 0;
                }

                if (element.type === "p") {
                    const splitParagraphs = this.splitParagraph(element, maxHeight);
                    for (const splitPart of splitParagraphs) {
                        this.pages.push([splitPart]);
                    }
                } else {
                    this.pages.push([element]);
                }
            } else if (
                currentPageHeight + elementHeight > maxHeight &&
                currentPageElements.length > 0
            ) {
                this.pages.push([...currentPageElements]);
                currentPageElements = [element];
                currentPageHeight = elementHeight;
            } else {
                currentPageElements.push(element);
                currentPageHeight += elementHeight;
            }
        }

        if (currentPageElements.length > 0) {
            this.pages.push(currentPageElements);
        }

        this.totalPages = this.pages.length;

        if (this.currentSpread * 2 >= this.totalPages) {
            this.currentSpread = Math.max(0, Math.floor((this.totalPages - 1) / 2));
        }

        this.updateCurrentSpread();
        this.updateUI();
    }

    measureElementHeight(element) {
        const style = element.style ? ` style="${element.style}"` : "";
        this.measurementContainer.innerHTML = `<${element.type}${style}>${element.content}</${element.type}>`;

        const tempDiv = this.measurementContainer.firstElementChild;
        return tempDiv.offsetHeight;
    }

    splitParagraph(paragraph, maxHeight) {
        const words = paragraph.content.split(" ");
        const parts = [];
        let currentWords = [];

        for (const word of words) {
            const testWords = [...currentWords, word];
            const testElement = { ...paragraph, content: testWords.join(" ") };
            const testHeight = this.measureElementHeight(testElement);

            if (testHeight > maxHeight && currentWords.length > 0) {
                parts.push({ ...paragraph, content: currentWords.join(" ") });
                currentWords = [word];
            } else {
                currentWords.push(word);
            }
        }

        if (currentWords.length > 0) {
            parts.push({ ...paragraph, content: currentWords.join(" ") });
        }

        return parts;
    }

    getMaxPageHeight() {
        const containerHeight = this.bookContainer.offsetHeight;
        const padding = window.innerWidth <= 768 ? 90 : 130;
        return containerHeight - padding;
    }

    renderPageContent(pageIndex) {
        if (pageIndex >= this.pages.length) return "";

        return this.pages[pageIndex]
            .map((element) => {
                const style = element.style ? ` style="${element.style}"` : "";
                return `<${element.type}${style}>${element.content}</${element.type}>`;
            })
            .join("");
    }

    updateCurrentSpread() {
        const leftPageIndex = this.currentSpread * 2;
        const rightPageIndex = leftPageIndex + 1;

        this.leftPageContent.innerHTML = this.renderPageContent(leftPageIndex);
        this.rightPageContent.innerHTML = this.renderPageContent(rightPageIndex);

        this.leftPageNumber.textContent = leftPageIndex + 1;
        this.rightPageNumber.textContent =
            rightPageIndex < this.totalPages ? rightPageIndex + 1 : "";
    }

    nextSpread() {
        if (this.isAnimating || this.currentSpread * 2 + 1 >= this.totalPages)
            return;

        this.isAnimating = true;
        this.createFlippingPage("next");
    }

    prevSpread() {
        if (this.isAnimating || this.currentSpread <= 0) return;

        this.isAnimating = true;
        this.createFlippingPage("prev");
    }

    createFlippingPage(direction) {
        const flippingPage = document.createElement("div");
        flippingPage.className = `flipping-page ${direction}-flip`;

        const pageFront = document.createElement("div");
        pageFront.className = "page-front";

        const pageBack = document.createElement("div");
        pageBack.className = "page-back";

        if (direction === "next") {
            const currentRightIndex = this.currentSpread * 2 + 1;
            const nextLeftIndex = (this.currentSpread + 1) * 2;

            pageFront.innerHTML = `
                        <div class="page-content">${this.renderPageContent(
                currentRightIndex
            )}</div>
                        <div class="page-number">${currentRightIndex < this.totalPages
                    ? currentRightIndex + 1
                    : ""
                }</div>
                    `;

            pageBack.innerHTML = `
                        <div class="page-content">${this.renderPageContent(
                nextLeftIndex
            )}</div>
                        <div class="page-number">${nextLeftIndex < this.totalPages
                    ? nextLeftIndex + 1
                    : ""
                }</div>
                    `;
        } else {
            const currentLeftIndex = this.currentSpread * 2;
            const prevRightIndex = (this.currentSpread - 1) * 2 + 1;

            pageFront.innerHTML = `
                        <div class="page-content">${this.renderPageContent(
                prevRightIndex
            )}</div>
                        <div class="page-number">${prevRightIndex < this.totalPages
                    ? prevRightIndex + 1
                    : ""
                }</div>
                    `;

            pageBack.innerHTML = `
                        <div class="page-content">${this.renderPageContent(
                currentLeftIndex
            )}</div>
                        <div class="page-number">${currentLeftIndex + 1}</div>
                    `;
        }

        flippingPage.appendChild(pageFront);
        flippingPage.appendChild(pageBack);
        this.book.appendChild(flippingPage);

        setTimeout(() => {
            flippingPage.classList.add("flipping");
        }, 50);

        setTimeout(() => {
            if (direction === "next") {
                this.currentSpread++;
            } else {
                this.currentSpread--;
            }
            this.updateCurrentSpread();
            this.updateUI();
        }, 300);

        setTimeout(() => {
            this.book.removeChild(flippingPage);
            this.isAnimating = false;
        }, 850);
    }

    updateUI() {
        const leftPage = this.currentSpread * 2 + 1;
        const rightPage = this.currentSpread * 2 + 2;
        const displayRight = rightPage <= this.totalPages ? `-${rightPage}` : "";
        this.pageIndicator.textContent = `Page ${leftPage}${displayRight} of ${this.totalPages}`;
    }

    adjustBrightness(value) {
        const brightness = parseFloat(value);
        const r = Math.floor(250 * brightness);
        const g = Math.floor(247 * brightness);
        const b = Math.floor(240 * brightness);
        const bgColor = `rgb(${r}, ${g}, ${b})`;
        const textColor = brightness > 0.7 ? "#2c2c2c" : "#555";

        this.bookContainer.style.setProperty("--bg-color", bgColor);
        this.bookContainer.style.setProperty("--text-color", textColor);
    }

    adjustFontSize(value) {
        this.bookContainer.style.setProperty("--font-size", `${value}px`);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new DigitalBookReader();
});
