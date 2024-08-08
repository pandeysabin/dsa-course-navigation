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
      setHighlightedTraversal(null); // Clear highlighted traversal when changing chapters
    }
  };

  const goUp = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      // setCurrentLesson(0);
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

          const classSelectedName =
            chapterIndex === currentChapter && currentLesson === -1
              ? "selected"
              : "";

          return (
            <div
              key={chapter.id}
              className={`chapter-container ${currentChapterClassName}`}
            >
              <h4
                className={`chapter-name ${currentChapterClassName} ${classSelectedName}`}
              >
                {chapter.id}
              </h4>

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
                >
                  <svg
                    width="30"
                    height="9"
                    viewBox="0 0 30 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.7184 6.51596L23.0337 0.361012C22.9118 0.24865 22.7564 0.157796 22.5792 0.0952707C22.402 0.0327455 22.2076 0.00017357 22.0106 0H19.3693C19.0962 0 18.9454 0.227851 19.1126 0.384684L24.9943 5.79986H0.326083C0.146737 5.79986 0 5.90638 0 6.03659V7.81205C0 7.94225 0.146737 8.04878 0.326083 8.04878H28.6912C29.7836 8.04878 30.391 7.13737 29.7184 6.51596Z"
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
                >
                  <svg
                    width="30"
                    height="9"
                    viewBox="0 0 30 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.281595 2.48404L6.9663 8.63899C7.0882 8.75135 7.24358 8.8422 7.42077 8.90473C7.59797 8.96725 7.79237 8.99982 7.98939 9L10.6307 9C10.9038 9 11.0546 8.77215 10.8874 8.61531L5.00572 3.20014L29.6739 3.20014C29.8533 3.20014 30 3.09362 30 2.96341L30 1.18795C30 1.05775 29.8533 0.95122 29.6739 0.95122L1.30876 0.951217C0.216377 0.951217 -0.390951 1.86262 0.281595 2.48404Z"
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
