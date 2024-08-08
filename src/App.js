import React, { useState, useEffect, useRef } from "react";
import "./App.css"; // Ensure this file is updated

const App = () => {
  const chapters = [
    {
      id: "chapter-1",
      lessons: [
        "Introduction to DSA",
        "Why Learn DSA?",
        "Prerequisites",
        "Best Practices",
      ],
    },
    {
      id: "chapter-2",
      lessons: [
        "Bubble Sort",
        "Selection Sort",
        "Insertion Sort",
        "Merge Sort",
        "Quick Sort",
        "Counting Sort",
      ],
    },
    {
      id: "chapter-3",
      lessons: ["Linear Search", "Binary Search"],
    },
    {
      id: "chapter-4",
      lessons: [
        "Linked List",
        "Linked List Operations",
        "Examples: Linked List",
      ],
    },
    {
      id: "chapter-5",
      lessons: [
        "Introduction to Circular Linked List",
        "Circular Linked List Operations",
        "Examples: Circular Linked List",
      ],
    },
    {
      id: "chapter-6",
      lessons: [
        "Introduction to Doubly Linked List",
        "Doubly Linked List Operations",
        "Examples: Doubly Linked List",
      ],
    },
    {
      id: "chapter-7",
      lessons: ["Stack", "Queue", "Double Ended Queue (Deque)"],
    },
    {
      id: "chapter-8",
      lessons: [
        "Introduction to Hashing",
        "Hashing Techniques",
        "Hash Collision",
        "Hash Collision Resolution",
        "Hash Functions",
        "Additional Topics",
      ],
    },
    {
      id: "chapter-9",
      lessons: [
        "Introduction",
        "Brute Force Method",
        "Rabin-Karp String Matching Algorithm",
        "Knuth-Morris-Pratt (KMP) Algorithm",
      ],
    },
    {
      id: "chapter-10",
      lessons: [
        "Nonlinear Data Structure",
        "Tree Data Structure",
        "Implementation of Trees",
        "Tree Traversal",
      ],
    },
    {
      id: "chapter-11",
      lessons: [
        "Introduction to Binary Trees",
        "Properties of Binary Trees",
        "Implementation of Binary Trees",
        "Traversal of Binary Tree",
        "Types of Binary Trees",
        "Example: Huffman Coding",
        "Example: Binary Search Tree",
      ],
    },
    {
      id: "chapter-12",
      lessons: [
        "Array Representation of Binary Tree",
        "Introduction to Heaps",
        "Heapify & Heap Operations",
        "Heap Sort",
        "Heap as a Priority Queue",
      ],
    },
    {
      id: "chapter-13",
      lessons: [
        "Introduction to Greedy Algorithms",
        "Classroom Scheduling Problem",
        "Coin Change Problem",
        "The Fractional Knapsack Problem",
        "0-1 Knapsack Problem",
      ],
    },
    {
      id: "chapter-14",
      lessons: [
        "Graph Data Structure",
        "Graph Terminologies",
        "Adjacency Matrix",
        "Adjacency List",
        "Graph Traversal With DFS Algorithm",
        "BFS Algorithm",
      ],
    },
    {
      id: "chapter-15",
      lessons: [
        "Graph Connectivity",
        "Touring a Graph",
        "Graph Comparisons and Special Properties",
        "Types of Graph",
      ],
    },
    {
      id: "chapter-16",
      lessons: [
        "Graph Based Algorithms",
        "Topological Sorting",
        "Dijkstra's Algorithm",
        "Ford–Fulkerson Algorithm",
        "Spanning Trees",
        "Kruskal's Algorithm",
        "Prim's Algorithm",
      ],
    },
    {
      id: "chapter-17",
      lessons: [
        "Additional Sorting Techniques",
        "Bucket Sort",
        "Radix Sort",
        "Shell Sort",
      ],
    },
    {
      id: "chapter-18",
      lessons: [
        "Introduction to Balanced Trees",
        "AVL Trees",
        "Red-Black Trees",
      ],
    },
    {
      id: "chapter-19",
      lessons: ["What's Next?"],
    },
  ];

  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [highlightedTraversal, setHighlightedTraversal] = useState(null); // Track highlighted traversal
  const [traversalDirection, setTraversalDirection] = useState(null); // Track traversal direction
  const courseContentRef = useRef(null);

  const updateHighlightedTraversal = (targetLessonIndex, direction) => {
    setHighlightedTraversal(targetLessonIndex);
    setTraversalDirection(direction);
    setTimeout(() => {
      setHighlightedTraversal(null);
      setTraversalDirection(null);
    }, 500); // Highlight for 0.5 seconds
  };

  const goRight = () => {
    const lessons = chapters[currentChapter].lessons;
    const nextLesson = Math.min(currentLesson + 1, lessons.length - 1);

    setCurrentLesson(nextLesson);
    updateHighlightedTraversal(nextLesson, "forward");
  };

  const goLeft = () => {
    const previousLesson = Math.max(currentLesson - 1, -1);

    updateHighlightedTraversal(previousLesson, "backward");
    setCurrentLesson(previousLesson);
  };

  const goDown = () => {
    if (currentLesson >= 0) {
      return;
    }

    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      // setCurrentLesson(0);
      setHighlightedTraversal(null); // Clear highlighted traversal when changing chapters
    }
  };

  const goUp = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setCurrentLesson(0);
      setHighlightedTraversal(null); // Clear highlighted traversal when changing chapters
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
          goRight();
          break;
        case "ArrowLeft":
          goLeft();
          break;
        case "ArrowDown":
          goDown();
          break;
        case "ArrowUp":
          goUp();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentChapter, currentLesson]);

  return (
    <div className="course-container">
      <div className="navigation-buttons">
        <button onClick={goUp} className="nav-button">
          ⬆️
        </button>
        <button onClick={goLeft} className="nav-button">
          ⬅️
        </button>
        <button onClick={goRight} className="nav-button">
          ➡️
        </button>
        <button onClick={goDown} className="nav-button">
          ⬇️
        </button>
      </div>
      <div className="course-content" ref={courseContentRef}>
        {chapters.map((chapter, chapterIndex) => {
          const currentChapterClassName =
            chapterIndex === currentChapter ? "active" : "";

          return (
            <div
              key={chapter.id}
              className={`chapter-container ${currentChapterClassName}`}
            >
              <div className={`chapter-name ${currentChapterClassName}`}>
                {chapter.id}
              </div>

              <div className="lessons">
                <RenderLesson
                  chapter={chapter}
                  chapterIndex={chapterIndex}
                  currentLesson={currentLesson}
                  currentChapter={currentChapter}
                  highlightedTraversal={highlightedTraversal}
                  traversalDirection={traversalDirection}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function RenderLesson({
  chapter,
  chapterIndex,
  currentLesson,
  currentChapter,
  highlightedTraversal,
  traversalDirection,
}) {
  useEffect(() => {
    const activeLessonEl = document.getElementById("active");

    if (currentLesson === -1) {
      return;
    }

    activeLessonEl.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [currentLesson]);

  if (chapterIndex !== currentChapter) return null;

  return (
    <>
      {chapter.lessons.map((lesson, lessonIndex) => (
        <React.Fragment key={lessonIndex}>
          <div
            style={{ animationDelay: `${lessonIndex}s`, visibility: "hidden" }}
            className="lesson"
            id={
              lessonIndex === currentLesson && chapterIndex === currentChapter
                ? "active"
                : ""
            }
          >
            {lesson}
          </div>
          <div
            style={{
              animationDelay: `${lessonIndex + 0.66}s`,
              visibility: "hidden",
              transform: "translateX(-200px)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {lessonIndex < chapter.lessons.length - 1 &&
              chapterIndex === currentChapter && (
                <div
                  className={`traversal-icon ${
                    highlightedTraversal === lessonIndex + 1 &&
                    traversalDirection === "forward" &&
                    chapterIndex === currentChapter
                      ? "highlight-forward"
                      : ""
                  }`}
                  style={{ transform: "translateX(-12px)" }}
                >
                  <svg
                    width="72"
                    height="8"
                    viewBox="0 0 72 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M71.709 6.47647L64.8015 0.358824C64.6755 0.247143 64.515 0.15684 64.3319 0.0946934C64.1488 0.032547 63.9479 0.000172518 63.7443 0L61.015 0C60.7328 0 60.5769 0.226471 60.7496 0.382353L66.8274 5.76471L54.0822 5.76471L0.336953 5.76471C0.151629 5.76471 0 5.87059 0 6L0 7.76471C0 7.89412 0.151629 8 0.336953 8L70.6476 8C71.7764 8 72.404 7.09412 71.709 6.47647Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
            {lessonIndex < chapter.lessons.length - 1 &&
              lessonIndex >= 0 &&
              chapterIndex === currentChapter && (
                <div
                  className={`traversal-icon ${
                    highlightedTraversal === lessonIndex &&
                    traversalDirection === "backward" &&
                    chapterIndex === currentChapter
                      ? "highlight-backward"
                      : ""
                  }`}
                  style={{ transform: "translateX(-1px)" }}
                >
                  <svg
                    width="72"
                    height="8"
                    viewBox="0 0 72 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.290986 1.52352L7.19851 7.64117C7.32448 7.75285 7.48504 7.84315 7.66814 7.9053C7.85124 7.96745 8.05212 7.99982 8.2557 7.99999L10.985 7.99999C11.2672 7.99999 11.4231 7.77352 11.2504 7.61764L5.17258 2.23529L17.9178 2.23529L71.663 2.23529C71.8484 2.23529 72 2.12941 72 2L72 0.235294C72 0.105882 71.8484 -1.32558e-08 71.663 -2.94573e-08L1.35238 -6.17621e-06C0.223588 -6.27489e-06 -0.403979 0.905876 0.290986 1.52352Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default App;
