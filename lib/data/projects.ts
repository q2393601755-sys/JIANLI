import type { Project } from "@/lib/types";

export const projects: Project[] = [
  // ===== 项目1: AI短片《回音Echo》 =====
  {
    id: "echo",
    slug: "echo",
    title: { zh: "AI短片《回音Echo》", en: "AI Short Film \"Echo\"" },
    subtitle: {
      zh: "AI生成的叙事短片",
      en: "AI-Generated Narrative Short Film",
    },
    summary: {
      zh: "一个关于遗忘与牺牲的AI叙事短片，全流程使用AI工具完成创作。",
      en: "An AI narrative short film about forgetting and sacrifice, created entirely through an AI-powered pipeline.",
    },
    description: {
      zh: "《回音Echo》是一部完全由AI工具辅助创作的叙事短片。故事讲述一个女孩逐渐被世界遗忘，男孩为了救她停止了时间，然而当时间恢复流动后，男孩自己成为了被遗忘的人。影片探索了记忆、牺牲与存在感消逝的主题，从剧本到成片的每个环节都融合了AI生成与人工把控。",
      en: "\"Echo\" is a narrative short film created entirely with AI-assisted tools. The story follows a girl gradually forgotten by the world; a boy stops time to save her, but when time resumes, he becomes the forgotten one. The film explores themes of memory, sacrifice, and the fading of existence, with every stage from script to final cut combining AI generation with human direction.",
    },
    year: 2026,
    category: { zh: "AI视频创作", en: "AI Video Creation" },
    tags: ["AI视频", "AI短片", "叙事", "Seedance", "全流程AI"],
    tools: ["Trae", "ChatGPT", "Seedance 2.0", "剪映", "Tunee"],
    cover: {
      type: "image",
      url: "/images/projects/echo-cover.png",
      alt: {
        zh: "AI短片《回音Echo》封面",
        en: "Cover of AI short film \"Echo\"",
      },
    },
    gallery: [
      {
        type: "image",
        url: "/images/projects/echo-title.png",
        alt: { zh: "回音标题卡", en: "Echo Title Card" },
      },
      {
        type: "image",
        url: "/images/projects/echo-cover.png",
        alt: { zh: "男孩伸手画面", en: "Boy Reaching Out" },
      },
      {
        type: "image",
        url: "/images/hero/echo-still.png",
        alt: { zh: "女孩伸手画面", en: "Girl Reaching Out" },
      },
    ],
    videoUrl: "https://v.douyin.com/Qk2U5XaelZw/",
    videoFile: "/videos/echo.mp4",
    featured: true,
    createdAt: "2026-07-15",
    process: [
      {
        step: 1,
        title: { zh: "故事概念", en: "Story Concept" },
        description: {
          zh: "构思核心概念：一个女孩被世界遗忘，男孩停止时间拯救她，最终自己被遗忘。",
          en: "Developed the core concept: a girl forgotten by the world, a boy who stops time to save her, and ultimately becomes forgotten himself.",
        },
        tools: ["ChatGPT"],
      },
      {
        step: 2,
        title: { zh: "剧本", en: "Script" },
        description: {
          zh: "将概念发展为完整剧本，细化场景描述与情感节奏。",
          en: "Developed the concept into a complete script, refining scene descriptions and emotional pacing.",
        },
        tools: ["ChatGPT"],
      },
      {
        step: 3,
        title: { zh: "分镜", en: "Storyboard" },
        description: {
          zh: "根据剧本拆解分镜，规划每个镜头的画面构图与叙事节奏。",
          en: "Broke down the script into storyboards, planning composition and narrative pacing for each shot.",
        },
        tools: ["ChatGPT"],
      },
      {
        step: 4,
        title: { zh: "角色设计", en: "Character Design" },
        description: {
          zh: "设计男孩与女孩的外观、服装与特征，确保后续AI生成的一致性。",
          en: "Designed the appearance, clothing, and features of the boy and girl, ensuring consistency in subsequent AI generation.",
        },
        tools: ["ChatGPT", "即梦"],
      },
      {
        step: 5,
        title: { zh: "场景设计", en: "Scene Design" },
        description: {
          zh: "设计关键场景的视觉风格与空间氛围，为AI生成提供参考。",
          en: "Designed the visual style and spatial atmosphere of key scenes, providing references for AI generation.",
        },
        tools: ["ChatGPT", "即梦"],
      },
      {
        step: 6,
        title: { zh: "AI图片生成", en: "AI Image Generation" },
        description: {
          zh: "使用AI图片工具生成分镜画面，作为视频生成的基础帧。",
          en: "Used AI image tools to generate storyboard frames as base images for video generation.",
        },
        tools: ["即梦"],
      },
      {
        step: 7,
        title: { zh: "AI视频生成", en: "AI Video Generation" },
        description: {
          zh: "将静态图片转化为动态视频片段，控制镜头运动与画面连贯性。",
          en: "Transformed static images into dynamic video clips, controlling camera movement and visual continuity.",
        },
        tools: ["Seedance 2.0"],
      },
      {
        step: 8,
        title: { zh: "声音设计", en: "Sound Design" },
        description: {
          zh: "完成配音与配乐，对齐画面节奏与情感表达。",
          en: "Completed voiceover and music, aligning with visual pacing and emotional expression.",
        },
        tools: ["Tunee"],
      },
      {
        step: 9,
        title: { zh: "剪辑", en: "Editing" },
        description: {
          zh: "将视频、配音、音乐整合剪辑，调整节奏与转场。",
          en: "Combined video, voiceover, and music through editing, adjusting pacing and transitions.",
        },
        tools: ["剪映"],
      },
      {
        step: 10,
        title: { zh: "最终成片", en: "Final Film" },
        description: {
          zh: "完成最终调色、字幕与输出，形成可发布的成片。",
          en: "Completed final color grading, subtitles, and export, producing the publishable final film.",
        },
        tools: ["剪映"],
      },
    ],
    challenges: [
      {
        title: { zh: "AI理解偏差", en: "AI Understanding Deviation" },
        problem: {
          zh: "AI对剧本情感与画面意图的理解存在偏差，生成结果与预期不一致。",
          en: "AI's understanding of the script's emotion and visual intent deviated, producing results inconsistent with expectations.",
        },
        solution: {
          zh: "通过反复优化提示词、拆解描述粒度，并在关键环节进行人工筛选与修正来缩小偏差。",
          en: "Reduced deviation by iteratively refining prompts, breaking down description granularity, and manually selecting and correcting at key stages.",
        },
      },
      {
        title: { zh: "人物一致性", en: "Character Consistency" },
        problem: {
          zh: "不同镜头中同一角色的外观特征难以保持一致。",
          en: "It was difficult to maintain consistent appearance of the same character across different shots.",
        },
        solution: {
          zh: "建立角色参考图与固定描述模板，在每次生成时引用相同参数控制角色特征。",
          en: "Built character reference sheets and fixed description templates, referencing the same parameters in each generation to control character features.",
        },
      },
      {
        title: { zh: "首尾帧不稳定", en: "First-Last Frame Instability" },
        problem: {
          zh: "AI视频生成时首帧与尾帧的画面控制不够稳定，导致镜头衔接困难。",
          en: "AI video generation had unstable control of first and last frames, making shot continuity difficult.",
        },
        solution: {
          zh: "通过多次生成与筛选，选取首尾帧最匹配的片段，并在剪辑中通过转场弥补衔接问题。",
          en: "Selected the best-matching first-last frame pairs through multiple generations, and compensated for continuity issues with transitions during editing.",
        },
      },
      {
        title: { zh: "镜头连续性", en: "Shot Continuity" },
        problem: {
          zh: "不同AI生成片段之间的镜头风格与运动方向缺乏连续性。",
          en: "Shot style and movement direction lacked continuity across different AI-generated clips.",
        },
        solution: {
          zh: "在分镜阶段统一镜头风格描述，生成时保持参数一致，剪辑时调整顺序与节奏增强连贯感。",
          en: "Unified shot style descriptions at the storyboard stage, maintained consistent parameters during generation, and adjusted order and pacing during editing to enhance continuity.",
        },
      },
    ],
  },

  // ===== 项目2: 昌荣苑房地产宣传片 =====
  {
    id: "changrongyuan",
    slug: "changrongyuan",
    title: { zh: "昌荣苑房地产宣传片", en: "Changrongyuan Real Estate Promo" },
    subtitle: {
      zh: "房产项目宣传片",
      en: "Real Estate Project Promotional Video",
    },
    summary: {
      zh: "为昌荣苑房产项目制作的宣传片，涵盖分镜到发布的完整制作流程。",
      en: "A promotional video produced for the Changrongyuan real estate project, covering the full production pipeline from storyboard to publishing.",
    },
    description: {
      zh: "为昌荣苑房产项目制作的商业宣传片，从分镜规划、实地拍摄、运镜设计到无人机航拍，再到剪辑、配音、字幕、配乐与发布，独立完成全流程制作。",
      en: "A commercial promotional video for the Changrongyuan real estate project, independently produced through the full pipeline from storyboard planning, on-site shooting, camera movement design, and drone aerial shots, to editing, voiceover, subtitles, music, and publishing.",
    },
    year: 2025,
    category: { zh: "商业视频", en: "Commercial Video" },
    tags: ["房产宣传片", "无人机", "商业视频"],
    tools: ["无人机", "剪映"],
    cover: {
      type: "image",
      url: "/images/projects/changrongyuan-cover.png",
      alt: {
        zh: "昌荣苑房地产宣传片封面",
        en: "Cover of Changrongyuan Real Estate Promo",
      },
    },
    videoUrl: "https://v.douyin.com/Bb3o8CmrqRE/",
    videoFile: "/videos/changrongyuan.mp4",
    featured: true,
    createdAt: "2025-06-01",
    process: [
      {
        step: 1,
        title: { zh: "分镜", en: "Storyboard" },
        description: {
          zh: "根据项目特点规划拍摄分镜，确定镜头序列与画面内容。",
          en: "Planned shooting storyboards based on project characteristics, defining shot sequences and visual content.",
        },
      },
      {
        step: 2,
        title: { zh: "拍摄", en: "Shooting" },
        description: {
          zh: "实地拍摄项目素材，涵盖建筑外观与周边环境。",
          en: "Shot project footage on-site, covering building exteriors and surrounding environment.",
        },
      },
      {
        step: 3,
        title: { zh: "运镜", en: "Camera Movement" },
        description: {
          zh: "设计并执行运镜方案，增强画面动感与空间表现力。",
          en: "Designed and executed camera movement plans, enhancing visual dynamics and spatial expression.",
        },
      },
      {
        step: 4,
        title: { zh: "无人机", en: "Drone" },
        description: {
          zh: "使用无人机进行航拍，获取项目全景与俯视画面。",
          en: "Used drone for aerial shots, capturing project panoramas and overhead views.",
        },
        tools: ["无人机"],
      },
      {
        step: 5,
        title: { zh: "剪辑", en: "Editing" },
        description: {
          zh: "整合素材进行剪辑，调整节奏与画面衔接。",
          en: "Integrated footage for editing, adjusting pacing and shot transitions.",
        },
        tools: ["剪映"],
      },
      {
        step: 6,
        title: { zh: "配音", en: "Voiceover" },
        description: {
          zh: "录制并添加项目介绍配音。",
          en: "Recorded and added project introduction voiceover.",
        },
      },
      {
        step: 7,
        title: { zh: "字幕", en: "Subtitles" },
        description: {
          zh: "添加字幕与项目信息文字。",
          en: "Added subtitles and project information text.",
        },
      },
      {
        step: 8,
        title: { zh: "音乐", en: "Music" },
        description: {
          zh: "选择配乐，烘托项目氛围。",
          en: "Selected background music to enhance the project atmosphere.",
        },
      },
      {
        step: 9,
        title: { zh: "发布", en: "Publish" },
        description: {
          zh: "完成成片并发布至目标平台。",
          en: "Completed the final film and published to target platforms.",
        },
      },
    ],
  },

  // ===== 项目3: 利桥样板房宣传片 =====
  {
    id: "liqiao",
    slug: "liqiao",
    title: { zh: "利桥样板房宣传片", en: "Liqiao Showroom Promo" },
    subtitle: {
      zh: "样板房空间宣传片",
      en: "Showroom Space Promotional Video",
    },
    summary: {
      zh: "为利桥样板房制作的宣传片，从参考分析到成片交付的完整流程。",
      en: "A promotional video for the Liqiao showroom, covering the full pipeline from reference analysis to final delivery.",
    },
    description: {
      zh: "为利桥样板房项目制作的空间宣传片。先通过参考分析确定视觉方向，再进行实地拍摄与剪辑，最终配乐成片，突出样板房的空间设计与居住氛围。",
      en: "A spatial promotional video for the Liqiao showroom project. First determined the visual direction through reference analysis, then conducted on-site shooting and editing, and finally added music to complete the film, highlighting the showroom's spatial design and living atmosphere.",
    },
    year: 2025,
    category: { zh: "商业视频", en: "Commercial Video" },
    tags: ["样板房", "空间宣传片", "商业视频"],
    tools: ["剪映"],
    cover: {
      type: "image",
      url: "/images/projects/liqiao-cover.png",
      alt: {
        zh: "利桥样板房宣传片封面",
        en: "Cover of Liqiao Showroom Promo",
      },
    },
    videoFile: "/videos/liqiao.mp4",
    featured: true,
    createdAt: "2025-05-01",
    process: [
      {
        step: 1,
        title: { zh: "参考分析", en: "Reference Analysis" },
        description: {
          zh: "分析同类样板房宣传片的视觉风格与表现手法，确定创作方向。",
          en: "Analyzed visual styles and techniques of similar showroom promos to determine the creative direction.",
        },
      },
      {
        step: 2,
        title: { zh: "拍摄", en: "Shooting" },
        description: {
          zh: "实地拍摄样板房空间，捕捉设计细节与空间氛围。",
          en: "Shot the showroom space on-site, capturing design details and spatial atmosphere.",
        },
      },
      {
        step: 3,
        title: { zh: "剪辑", en: "Editing" },
        description: {
          zh: "整合拍摄素材进行剪辑，突出空间亮点与动线体验。",
          en: "Integrated footage for editing, highlighting spatial highlights and circulation experience.",
        },
        tools: ["剪映"],
      },
      {
        step: 4,
        title: { zh: "配乐", en: "Music" },
        description: {
          zh: "选择配乐，营造舒适居住氛围。",
          en: "Selected music to create a comfortable living atmosphere.",
        },
      },
      {
        step: 5,
        title: { zh: "成片", en: "Final Film" },
        description: {
          zh: "完成最终输出与交付。",
          en: "Completed final output and delivery.",
        },
        tools: ["剪映"],
      },
    ],
  },

  // ===== 项目4: MG动画短片 =====
  {
    id: "mg",
    slug: "mg",
    title: { zh: "MG动画短片", en: "MG Animation Short" },
    subtitle: { zh: "3D角色与数据可视化动画", en: "3D Character & Data Visualization Animation" },
    summary: {
      zh: "以3D动画角色与数据图表特效制作的MG动画短片。",
      en: "An MG animation short featuring 3D characters and data visualization effects.",
    },
    description: {
      zh: "一部MG风格的动画短片。以卡通创作者形象为主角，结合悬浮数据图表、数字工具图标等视觉特效，在3D场景中展开叙事，展现动态图形设计与动画叙事能力。",
      en: "An MG-style animated short. Centered on a cartoon creator character combined with floating data charts and digital tool icons, the film unfolds in 3D scenes, demonstrating motion graphics design and animated storytelling.",
    },
    year: 2026,
    category: { zh: "动画创作", en: "Animation" },
    tags: ["MG动画", "3D动画", "数据可视化"],
    tools: ["剪映"],
    cover: {
      type: "image",
      url: "/images/projects/mg-cover.png",
      alt: {
        zh: "MG动画短片封面",
        en: "Cover of MG Animation Short",
      },
    },
    videoFile: "/videos/mg.mp4",
    featured: true,
    createdAt: "2026-09-10",
  },

  // ===== 项目5: AI短片《未完成的人生》 =====
  {
    id: "unfinished-life",
    slug: "unfinished-life",
    title: { zh: "AI短片《未完成的人生》", en: "AI Short Film \"Unfinished Life\"" },
    subtitle: {
      zh: "献给每一个还没有成为自己想成为的人",
      en: "Dedicated to everyone who has not yet become who they want to be",
    },
    summary: {
      zh: "一部关于成长、遗憾与未完成梦想的AI叙事短片。",
      en: "An AI narrative short film about growth, regret, and unfinished dreams.",
    },
    description: {
      zh: "《未完成的人生》是一部AI辅助创作的叙事短片。影片以「献给每一个还没有成为自己想成为的人」为主题，探索成长路上的遗憾、迷茫与未完成的梦想。通过AI生成与人工把控的结合，呈现一段关于自我审视与和解的情感旅程。",
      en: "\"Unfinished Life\" is an AI-assisted narrative short film. Centered on the dedication \"to everyone who has not yet become who they want to be,\" the film explores regret, confusion, and unfinished dreams on the path of growth. Through a combination of AI generation and human direction, it presents an emotional journey of self-examination and reconciliation.",
    },
    year: 2026,
    category: { zh: "AI视频创作", en: "AI Video Creation" },
    tags: ["AI视频", "AI短片", "叙事", "成长", "Seedance"],
    tools: ["Trae", "ChatGPT", "Seedance 2.0", "剪映"],
    cover: {
      type: "image",
      url: "/images/projects/unfinished-life-cover.png",
      alt: {
        zh: "AI短片《未完成的人生》封面",
        en: "Cover of AI short film \"Unfinished Life\"",
      },
    },
    videoFile: "/videos/unfinished-life.mp4",
    featured: true,
    createdAt: "2026-08-18",
  },

  // ===== 项目6: 西湖徒步Vlog =====
  {
    id: "xihu-vlog",
    slug: "xihu-vlog",
    title: { zh: "西湖徒步Vlog", en: "West Lake Hiking Vlog" },
    subtitle: {
      zh: "AI辅助脚本的旅行Vlog",
      en: "Travel Vlog with AI-Assisted Script",
    },
    summary: {
      zh: "使用DeepSeek辅助脚本创作的西湖徒步Vlog，融合AI策划与真实拍摄。",
      en: "A West Lake hiking vlog using DeepSeek for script assistance, combining AI planning with real footage.",
    },
    description: {
      zh: "以西湖徒步为主题的旅行Vlog。使用DeepSeek辅助生成脚本框架，再进行真实拍摄与剪辑，探索AI在旅行内容创作中的辅助作用。",
      en: "A travel vlog themed around hiking at West Lake. Used DeepSeek to assist in generating the script framework, then conducted real shooting and editing, exploring AI's supporting role in travel content creation.",
    },
    year: 2025,
    category: { zh: "Vlog", en: "Vlog" },
    tags: ["Vlog", "AI辅助", "旅行", "DeepSeek"],
    tools: ["DeepSeek", "剪映"],
    cover: {
      type: "image",
      url: "/images/projects/xihu-vlog-cover.png",
      alt: {
        zh: "西湖徒步Vlog封面",
        en: "Cover of West Lake Hiking Vlog",
      },
    },
    videoUrl: "https://v.douyin.com/R-5dGFdhav4/",
    videoFile: "/videos/xihu-vlog.mp4",
    featured: true,
    createdAt: "2025-04-01",
    process: [
      {
        step: 1,
        title: { zh: "DeepSeek辅助脚本", en: "DeepSeek-Assisted Script" },
        description: {
          zh: "使用DeepSeek生成Vlog脚本框架，规划叙事结构与拍摄要点。",
          en: "Used DeepSeek to generate the vlog script framework, planning narrative structure and shooting key points.",
        },
        tools: ["DeepSeek"],
      },
      {
        step: 2,
        title: { zh: "真实拍摄", en: "Real Shooting" },
        description: {
          zh: "根据脚本框架进行实地拍摄，记录西湖徒步过程。",
          en: "Shot on-site according to the script framework, documenting the West Lake hiking experience.",
        },
      },
      {
        step: 3,
        title: { zh: "剪辑", en: "Editing" },
        description: {
          zh: "整合素材进行剪辑，调整节奏与叙事。",
          en: "Integrated footage for editing, adjusting pacing and narrative.",
        },
        tools: ["剪映"],
      },
      {
        step: 4,
        title: { zh: "成片", en: "Final Film" },
        description: {
          zh: "完成最终输出。",
          en: "Completed final output.",
        },
        tools: ["剪映"],
      },
    ],
  },

  // ===== 项目7: 昌荣苑探盘Vlog =====
  {
    id: "cepin",
    slug: "cepin",
    title: { zh: "昌荣苑探盘Vlog", en: "Changrongyuan Property Tour Vlog" },
    subtitle: { zh: "竖屏房产探盘短视频", en: "Vertical Property Tour Video" },
    summary: {
      zh: "昌荣苑楼盘竖屏探盘视频，真人出镜讲解结合航拍合成特效。",
      en: "A vertical property tour video of Changrongyuan, combining on-camera presentation with aerial compositing effects.",
    },
    description: {
      zh: "以昌荣苑楼盘为主题的竖屏探盘短视频。采用真人出镜讲解与无人机航拍合成特效，从区位交通、周边配套到项目现状逐一呈现，是竖屏房产内容的完整实践。",
      en: "A vertical property tour short video themed on the Changrongyuan project. Combining on-camera presentation with drone aerial compositing effects, it presents location, transit access, surrounding amenities, and project status — a complete practice in vertical real-estate content.",
    },
    year: 2026,
    category: { zh: "商业视频", en: "Commercial Video" },
    tags: ["房产视频", "探盘", "竖屏短视频", "航拍合成"],
    tools: ["剪映"],
    cover: {
      type: "image",
      url: "/images/projects/cepin-cover.png",
      alt: {
        zh: "昌荣苑探盘Vlog封面",
        en: "Cover of Changrongyuan Property Tour Vlog",
      },
    },
    videoFile: "/videos/cepin.mp4",
    featured: true,
    createdAt: "2026-09-12",
  },

  // ===== 项目8: 职场情景短剧 =====
  {
    id: "xiaojuchang",
    slug: "xiaojuchang",
    title: { zh: "职场情景短剧", en: "Workplace Skit" },
    subtitle: { zh: "办公室情景短剧", en: "Office Situation Skit" },
    summary: {
      zh: "以办公室日常为背景的职场情景短剧。",
      en: "A workplace situation skit set against everyday office life.",
    },
    description: {
      zh: "一部以办公室日常为背景的职场情景短剧。围绕同事间的互动展开轻喜剧叙事，通过场景调度、表演节奏与字幕包装完成短视频化的情景剧表达。",
      en: "A workplace situation skit set in everyday office life. Built around interactions between colleagues, it delivers light comedic storytelling through scene staging, performance pacing, and subtitle packaging for the short-video format.",
    },
    year: 2026,
    category: { zh: "情景短剧", en: "Skit" },
    tags: ["情景短剧", "职场", "短视频"],
    tools: ["剪映"],
    cover: {
      type: "image",
      url: "/images/projects/xiaojuchang-cover.png",
      alt: {
        zh: "职场情景短剧封面",
        en: "Cover of Workplace Skit",
      },
    },
    videoFile: "/videos/xiaojuchang.mp4",
    featured: true,
    createdAt: "2026-09-13",
  },

  // ===== 项目9: AI内容策略案例 =====
  {
    id: "ai-strategy",
    slug: "ai-strategy",
    title: { zh: "AI内容策略案例", en: "AI Content Strategy Case" },
    subtitle: {
      zh: "AI驱动的账号分析与内容策略",
      en: "AI-Driven Account Analysis & Content Strategy",
    },
    summary: {
      zh: "使用AI工具进行账号分析、热点分析与选题规划，输出完整的内容策略方案。",
      en: "Used AI tools for account analysis, trend analysis, and topic planning, delivering a complete content strategy.",
    },
    description: {
      zh: "一个完整的AI驱动内容策略案例。从账号数据分析与诊断入手，结合热点分析与账号诊断结果，进行选题规划与脚本生成，最终输出PPT方案。展示了AI在内容策略制定中的全链路应用能力。",
      en: "A complete AI-driven content strategy case. Starting from account data analysis and diagnosis, combined with trend analysis and diagnostic results, conducted topic planning and script generation, ultimately delivering a PPT proposal. Demonstrates AI's full-pipeline application capability in content strategy development.",
    },
    year: 2026,
    category: { zh: "AI内容策略", en: "AI Content Strategy" },
    tags: ["AI策略", "账号分析", "内容策略", "PPT方案"],
    tools: ["ChatGPT", "DeepSeek", "豆包", "Gemini"],
    cover: {
      type: "image",
      url: "/images/projects/ai-strategy-cover.jpg",
      alt: {
        zh: "AI内容策略案例封面",
        en: "Cover of AI Content Strategy Case",
      },
    },
    featured: false,
    createdAt: "2026-05-01",
    process: [
      {
        step: 1,
        title: { zh: "账号分析", en: "Account Analysis" },
        description: {
          zh: "使用AI工具对运营账号进行数据分析，梳理现状与问题。",
          en: "Used AI tools to analyze operated accounts, mapping current status and problems.",
        },
        tools: ["ChatGPT", "DeepSeek"],
      },
      {
        step: 2,
        title: { zh: "热点分析", en: "Trend Analysis" },
        description: {
          zh: "分析平台热点与内容趋势，找到选题机会。",
          en: "Analyzed platform trends and content directions to find topic opportunities.",
        },
        tools: ["豆包", "DeepSeek"],
      },
      {
        step: 3,
        title: { zh: "账号诊断", en: "Account Diagnosis" },
        description: {
          zh: "结合数据与热点，对账号进行诊断，定位改进方向。",
          en: "Combined data and trends to diagnose the account, identifying improvement directions.",
        },
        tools: ["ChatGPT", "Gemini"],
      },
      {
        step: 4,
        title: { zh: "选题规划", en: "Topic Planning" },
        description: {
          zh: "基于诊断结果制定选题规划，明确内容方向。",
          en: "Developed topic plans based on diagnostic results, clarifying content direction.",
        },
        tools: ["ChatGPT", "DeepSeek"],
      },
      {
        step: 5,
        title: { zh: "脚本生成", en: "Script Generation" },
        description: {
          zh: "使用AI生成内容脚本，包括文案与分镜描述。",
          en: "Used AI to generate content scripts, including copywriting and storyboard descriptions.",
        },
        tools: ["ChatGPT", "豆包"],
      },
      {
        step: 6,
        title: { zh: "PPT方案", en: "PPT Proposal" },
        description: {
          zh: "将策略整理为PPT方案，形成可执行的交付物。",
          en: "Organized the strategy into a PPT proposal, forming an actionable deliverable.",
        },
      },
    ],
  },
];

// ===== 辅助函数 =====

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
