import { Clock, Code2, Calendar, Users } from "lucide-react";

export const INTERVIEW_CATEGORY = [
    { id: "upcoming", title: "Upcoming Interviews", variant: "outline" },
    { id: "completed", title: "Completed", variant: "secondary" },
    { id: "succeeded", title: "Succeeded", variant: "default" },
    { id: "failed", title: "Failed", variant: "destructive" },
] as const;

export const TIME_SLOTS = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
];

export const QUICK_ACTIONS = [
    {
        icon: Code2,
        title: "New Call",
        description: "Start an instant call",
        color: "primary",
        gradient: "from-primary/10 via-primary/5 to-transparent",
    },
    {
        icon: Users,
        title: "Join Interview",
        description: "Enter via invitation link",
        color: "purple-500",
        gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    },
    {
        icon: Calendar,
        title: "Schedule",
        description: "Plan upcoming interviews",
        color: "blue-500",
        gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    },
    {
        icon: Clock,
        title: "Recordings",
        description: "Access past interviews",
        color: "orange-500",
        gradient: "from-orange-500/10 via-orange-500/5 to-transparent",
    },
];

export const CODING_QUESTIONS: CodeQuestion[] = [
    {
        id: "two-sum",
        title: "Two Sum",
        description:
            "Given an array of integers `nums` and an integer `target`, return indices of the two numbers in the array such that they add up to `target`.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
        examples: [
            {
                input: "nums = [2,7,11,15], target = 9",
                output: "[0,1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]",
            },
            {
                input: "nums = [3,2,4], target = 6",
                output: "[1,2]",
            },
        ],
        starterCode: {
            javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}`,
            python: `def two_sum(nums, target):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
    }
}`,
        },
        constraints: [
            "2 ≤ nums.length ≤ 104",
            "-109 ≤ nums[i] ≤ 109",
            "-109 ≤ target ≤ 109",
            "Only one valid answer exists.",
        ],
    },
    {
        id: "reverse-string",
        title: "Reverse String",
        description:
            "Write a function that reverses a string. The input string is given as an array of characters `s`.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
        examples: [
            {
                input: 's = ["h","e","l","l","o"]',
                output: '["o","l","l","e","h"]',
            },
            {
                input: 's = ["H","a","n","n","a","h"]',
                output: '["h","a","n","n","a","H"]',
            },
        ],
        starterCode: {
            javascript: `function reverseString(s) {
  // Write your solution here
  
}`,
            python: `def reverse_string(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void reverseString(char[] s) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "palindrome-number",
        title: "Palindrome Number",
        description:
            "Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.\n\nAn integer is a palindrome when it reads the same forward and backward.",
        examples: [
            {
                input: "x = 121",
                output: "true",
                explanation: "121 reads as 121 from left to right and from right to left.",
            },
            {
                input: "x = -121",
                output: "false",
                explanation:
                    "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
            },
        ],
        starterCode: {
            javascript: `function isPalindrome(x) {
  // Write your solution here
  
}`,
            python: `def is_palindrome(x):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "fibonacci-number",
        title: "Fibonacci Number",
        description: "Given `n`, return the nth Fibonacci number.",
        examples: [
            {
                input: "n = 5",
                output: "5",
            },
            {
                input: "n = 10",
                output: "55",
            },
        ],
        starterCode: {
            javascript: `function fib(n) {
  // Write your solution here
  
}`,
            python: `def fib(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int fib(int n) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "merge-sorted-array",
        title: "Merge Sorted Array",
        description:
            "Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array.",
        examples: [
            {
                input: "nums1 = [1,2,3,0,0,0], nums2 = [2,5,6]",
                output: "[1,2,2,3,5,6]",
            },
        ],
        starterCode: {
            javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
  
}`,
            python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        description:
            "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
        examples: [
            {
                input: 's = "()"',
                output: "true",
            },
            {
                input: 's = "(]"',
                output: "false",
            },
        ],
        starterCode: {
            javascript: `function isValid(s) {
  // Write your solution here
  
}`,
            python: `def is_valid(s):
    # Write your solution here
    pass`,
            java: `class Solution {
    public boolean isValid(String s) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        description:
            "You are climbing a staircase. It takes `n` steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        examples: [
            {
                input: "n = 2",
                output: "2",
            },
            {
                input: "n = 3",
                output: "3",
            },
        ],
        starterCode: {
            javascript: `function climbStairs(n) {
  // Write your solution here
  
}`,
            python: `def climb_stairs(n):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int climbStairs(int n) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "longest-common-prefix",
        title: "Longest Common Prefix",
        description:
            "Write a function to find the longest common prefix string amongst an array of strings.",
        examples: [
            {
                input: 'strs = ["flower","flow","flight"]',
                output: '"fl"',
            },
        ],
        starterCode: {
            javascript: `function longestCommonPrefix(strs) {
  // Write your solution here
  
}`,
            python: `def longest_common_prefix(strs):
    # Write your solution here
    pass`,
            java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your solution here
        
    }
}`,
        },
    },
    {
        id: "missing-number",
        title: "Missing Number",
        description:
            "Given an array containing `n` distinct numbers taken from `0, 1, 2, ..., n`, find the one that is missing from the array.",
        examples: [
            {
                input: "nums = [3,0,1]",
                output: "2",
            },
        ],
        starterCode: {
            javascript: `function missingNumber(nums) {
  // Write your solution here
  
}`,
            python: `def missing_number(nums):
    # Write your solution here
    pass`,
            java: `class Solution {
    public int missingNumber(int[] nums) {
        // Write your solution here
        
    }
}`,
        },
    }
];

export const LANGUAGES = [
    { id: "javascript", name: "JavaScript", icon: "/javascript.png" },
    { id: "python", name: "Python", icon: "/python.png" },
    { id: "java", name: "Java", icon: "/java.png" },
] as const;

export interface CodeQuestion {
    id: string;
    title: string;
    description: string;
    examples: Array<{
        input: string;
        output: string;
        explanation?: string;
    }>;
    starterCode: {
        javascript: string;
        python: string;
        java: string;
    };
    constraints?: string[];
}

export type QuickActionType = (typeof QUICK_ACTIONS)[number];