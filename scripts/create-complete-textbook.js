#!/usr/bin/env node

/**
 * Complete Textbook Generator
 * Creates comprehensive, publication-quality content for all chapters
 */

const fs = require('fs').promises;
const path = require('path');
const { buildChapterPDF } = require('./build-chapter');

// Comprehensive content library for all chapters
const completeChapters = {
    2: {
        title: "Systems in Nature",
        ngss: ["MS-LS2-1", "MS-LS2-2", "MS-ESS2-4"],
        objectives: [
            "Identify different types of natural systems and their components",
            "Explain how ecosystems function as interconnected systems",
            "Describe the water cycle as a continuous system",
            "Understand how weather systems form and change",
            "Analyze how natural systems interact and depend on each other"
        ],
        overview: "Nature is a master systems engineer! From the tiniest ecosystem in a drop of pond water to the vast water cycle that spans our entire planet, natural systems demonstrate incredible complexity and beauty. In this chapter, you'll discover how ecosystems function as living systems, how energy flows through food webs, how water cycles endlessly through our environment, and how weather systems shape our world. Understanding these natural systems helps us appreciate the interconnectedness of life on Earth and guides us in protecting our planet.",
        introduction: `Look outside your window right now. What do you see? Trees swaying in the breeze? Birds searching for food? Clouds drifting across the sky? Every single thing you observe is part of a natural system—a complex network where living and non-living components interact in fascinating ways.

A single tree is a system. A forest is a system. A pond is a system. Even the air you're breathing is part of Earth's atmospheric system! Natural systems are everywhere, and they're all connected. Understanding how these systems work helps us understand our world, predict changes, and make better decisions about how we interact with nature.

In this chapter, we'll explore some of Earth's most important natural systems. You'll learn how ecosystems maintain balance, how energy flows through food webs, how water cycles through our environment, and how weather systems create the conditions for life. Get ready to see nature in a whole new way!`,
        sections: [
            {
                title: "Ecosystems: Nature's Living Systems",
                content: `An ecosystem is one of the best examples of a natural system. It's a community where living organisms (plants, animals, fungi, bacteria) interact with their non-living environment (soil, water, air, sunlight) in a complex web of relationships.

Think about a forest ecosystem. The trees are producers—they use sunlight, water, and carbon dioxide to create food through photosynthesis. This process releases oxygen into the air. Animals breathe that oxygen and eat the plants (or other animals). When living things die, decomposers like fungi and bacteria break them down, returning nutrients to the soil. Those nutrients feed new plants, and the cycle continues.

Every part of the ecosystem depends on other parts. Remove the trees, and animals lose their homes and food. Remove the decomposers, and dead material piles up, blocking new growth. Remove the soil, and nothing can grow. It's all connected!

**Key Components of Ecosystems:**
- **Producers**: Plants and algae that make their own food
- **Consumers**: Animals that eat other organisms
- **Decomposers**: Organisms that break down dead material
- **Abiotic factors**: Non-living parts like water, soil, sunlight, temperature

Ecosystems can be as small as a puddle or as large as an ocean. But no matter the size, they all follow the same principles: parts work together, energy flows through the system, and materials cycle continuously.`,
                activity: "Create an Ecosystem Map: Choose a local ecosystem (a park, your backyard, a nearby pond). Draw a map showing all the living and non-living components. Draw arrows showing how they connect. What would happen if you removed one component?"
            },
            {
                title: "Food Webs: Energy Flow Through Systems",
                content: `Energy is the fuel that powers all ecosystems. But where does it come from? The sun! Through photosynthesis, plants capture sunlight and convert it into chemical energy stored in food molecules. This energy then flows through the ecosystem as organisms eat each other.

A **food chain** shows a simple path of energy flow: grass → rabbit → fox. But ecosystems are much more complex than simple chains. Most animals eat multiple things, and most organisms are eaten by multiple predators. This creates a **food web**—a complex network showing all the feeding relationships in an ecosystem.

**Trophic Levels:**
1. **Primary Producers**: Plants and algae (they produce their own food)
2. **Primary Consumers**: Herbivores that eat plants
3. **Secondary Consumers**: Carnivores that eat herbivores
4. **Tertiary Consumers**: Top predators that eat other carnivores
5. **Decomposers**: Break down all dead organisms at every level

Energy flows in one direction through these levels, but it doesn't flow efficiently. At each level, about 90% of the energy is lost as heat. Only about 10% moves to the next level. This is why there are usually many more plants than herbivores, and more herbivores than carnivores.

**The Energy Pyramid**: Imagine a pyramid with producers at the bottom (the widest part) and top predators at the top (the narrowest part). This shape shows how energy decreases as it moves up through the food web.`,
                activity: "Build a Food Web: Research a local ecosystem and create a detailed food web diagram. Include at least 15 different organisms. Use arrows to show energy flow. Identify which organisms would be most affected if one species disappeared."
            },
            {
                title: "The Water Cycle: Earth's Circulating System",
                content: `The water cycle is one of Earth's most important systems. It's been operating for billions of years, continuously moving water through our planet's systems. The same water molecules that filled ancient oceans might be in your glass of water today!

**The Four Main Processes:**

1. **Evaporation**: The sun heats water in oceans, lakes, rivers, and even puddles. This energy causes water molecules to move faster and escape into the air as water vapor. Plants also release water vapor through their leaves in a process called transpiration.

2. **Condensation**: As water vapor rises into the atmosphere, it cools down. Cool air can't hold as much water vapor, so the vapor condenses into tiny water droplets, forming clouds. You can see this happen when you breathe on a cold window—your warm breath condenses into water droplets.

3. **Precipitation**: When water droplets in clouds become too heavy, gravity pulls them down as precipitation—rain, snow, sleet, or hail. This is how water returns to Earth's surface.

4. **Collection**: Precipitation collects in rivers, lakes, and oceans. Some water soaks into the ground (infiltration) and becomes groundwater. Some flows over the surface (runoff) into streams and rivers, eventually reaching the ocean. And the cycle begins again!

**Why It Matters**: The water cycle distributes water around the planet, making life possible everywhere. It cleans water through evaporation (leaving impurities behind) and transports nutrients. It also helps regulate Earth's temperature. Without the water cycle, life as we know it couldn't exist!`,
                activity: "Track the Water Cycle: Follow a single drop of water through the complete cycle. Write a story from the water drop's perspective as it moves through evaporation, condensation, precipitation, and collection. Include details about what it experiences at each stage."
            },
            {
                title: "Weather Systems: Atmospheric Patterns",
                content: `Weather is another natural system that affects our daily lives. It involves temperature, air pressure, humidity, wind, and precipitation—all working together to create the conditions we experience.

**How Weather Systems Form:**

Weather happens because of differences in temperature and air pressure. When the sun heats Earth's surface, the air above it warms and rises. Cooler air moves in to take its place, creating wind. As warm air rises, it cools, and water vapor condenses into clouds. When clouds become heavy enough, precipitation falls.

**Types of Weather Systems:**

- **High Pressure Systems**: Dense, cool air that sinks. Usually brings clear, sunny weather.
- **Low Pressure Systems**: Less dense, warm air that rises. Usually brings clouds and precipitation.
- **Fronts**: Boundaries between different air masses. Where fronts meet, weather changes occur.
- **Storms**: Intense weather systems like thunderstorms, hurricanes, and tornadoes.

Weather systems can be small (a single thunderstorm) or enormous (a hurricane covering hundreds of miles). They're constantly moving and changing, which is why weather can be so unpredictable!

**Climate vs. Weather**: Weather is what happens day-to-day. Climate is the long-term pattern of weather in a region. Climate systems are even larger and more complex than weather systems, involving ocean currents, wind patterns, and Earth's rotation over years and decades.`,
                activity: "Weather Journal: Keep a weather journal for one week. Record temperature, cloud cover, precipitation, and wind. Try to identify patterns. Can you predict what the weather might be like based on what you observe?"
            },
            {
                title: "System Interactions: Everything is Connected",
                content: `Natural systems don't exist in isolation—they're all connected! The water cycle affects ecosystems. Weather systems influence the water cycle. Ecosystems modify weather patterns. It's all one big, interconnected system.

**Examples of System Interactions:**

- **Forests and Weather**: Trees release water vapor through transpiration, which affects local weather patterns. Large forests can even create their own rain!
- **Oceans and Climate**: Ocean currents distribute heat around the planet, affecting global climate patterns.
- **Ecosystems and Water Quality**: Healthy ecosystems filter water and remove pollutants, improving water quality for downstream systems.
- **Weather and Ecosystems**: Weather patterns determine what types of ecosystems can exist in different regions.

Understanding these connections helps us see the bigger picture. When we protect one system, we're often helping others. When we damage one system, the effects ripple through connected systems. This is systems thinking—seeing how everything connects!`,
                activity: "System Connection Map: Choose one natural system and create a diagram showing how it connects to at least three other systems. Use arrows and labels to explain the connections. What happens if one connection breaks?"
            }
        ],
        realWorld: `Understanding natural systems is crucial for solving environmental challenges. When scientists noticed that certain fish populations were declining in the Great Lakes, they used systems thinking to investigate. They discovered that invasive species had disrupted the food web, which affected water quality, which impacted the entire ecosystem. By understanding how all the parts connected, they developed solutions that restored the whole system.

Climate scientists use systems thinking to understand global warming. They study how increased carbon dioxide affects the atmosphere system, which changes weather patterns, which impacts ecosystems, which affects the water cycle, and so on. By seeing the whole system, they can predict changes and develop solutions.

Conservation efforts also use systems thinking. When protecting endangered species, scientists don't just focus on the animal—they protect its entire ecosystem, understanding that the species depends on the whole system functioning properly.`,
        reviewQuestions: [
            "What are the main components of an ecosystem system? How do they work together?",
            "Explain how energy flows through a food web. Why is there usually more biomass at lower trophic levels?",
            "Describe the four main processes of the water cycle. Why is this cycle essential for life on Earth?",
            "How do weather systems form? What factors influence weather patterns?",
            "Give three examples of how different natural systems interact with each other.",
            "Why is it important to understand natural systems when making environmental decisions?",
            "How does systems thinking help scientists solve environmental problems?"
        ],
        keyTerms: [
            { term: "Ecosystem", definition: "A community of living organisms interacting with their non-living environment, functioning as a complete system." },
            { term: "Food Web", definition: "A complex network showing all feeding relationships in an ecosystem, demonstrating how energy flows through the system." },
            { term: "Producer", definition: "An organism, usually a plant or alga, that makes its own food using sunlight through photosynthesis." },
            { term: "Consumer", definition: "An organism that obtains energy by eating other organisms." },
            { term: "Decomposer", definition: "An organism that breaks down dead organic material, returning nutrients to the ecosystem." },
            { term: "Trophic Level", definition: "A position in a food web representing what an organism eats and what eats it." },
            { term: "Water Cycle", definition: "The continuous movement of water through Earth's systems via evaporation, condensation, precipitation, and collection." },
            { term: "Transpiration", definition: "The process by which plants release water vapor through their leaves into the atmosphere." },
            { term: "Weather System", definition: "A system involving temperature, air pressure, humidity, and wind that creates weather patterns." },
            { term: "System Interaction", definition: "How different natural systems connect and influence each other." }
        ],
        furtherExploration: `**Research Projects:**
- Investigate a local ecosystem and create a comprehensive food web diagram
- Research how climate change is affecting natural systems in your region
- Study a specific natural system (like a local river or forest) and document all its components

**Hands-On Activities:**
- Build a model of the water cycle using a terrarium
- Create a weather station and track local weather patterns
- Visit a nature center or park to observe systems in action

**Career Connections:**
- Interview an ecologist, meteorologist, or environmental scientist
- Research careers that involve studying natural systems
- Learn about conservation efforts in your area

**Technology Integration:**
- Use online tools to track weather systems
- Explore satellite images showing natural systems from space
- Use simulation software to model ecosystem interactions`
    },
    3: {
        title: "Human Body Systems",
        ngss: ["MS-LS1-3", "MS-LS1-7"],
        objectives: [
            "Identify the major body systems and their primary functions",
            "Explain how body systems work together to maintain life",
            "Describe the structure and function of key organs in each system",
            "Understand how body systems respond to changes and maintain homeostasis",
            "Analyze how lifestyle choices affect body system health"
        ],
        overview: "Your body is an incredible collection of systems working in perfect harmony! Every second of every day, your circulatory system pumps blood, your respiratory system exchanges gases, your digestive system processes nutrients, your nervous system sends messages, and many other systems work together to keep you alive and functioning. In this chapter, you'll explore the major body systems, discover how they're structured, understand how they function, and learn how they work together as one integrated system. Understanding your body's systems helps you make healthy choices and appreciate the amazing complexity of human life.",
        introduction: `Take a deep breath. Feel your heart beat. Notice how you can read these words. Your body is performing incredible feats right now, and you're probably not even thinking about it!

Your body contains 11 major systems, each with a specific job. But here's the amazing part: these systems don't work alone. They're all connected, constantly communicating and coordinating to keep you alive and healthy. When you run, your heart beats faster to pump more blood, your lungs work harder to get more oxygen, your muscles use that oxygen to move, and your nervous system coordinates everything—all automatically!

In this chapter, we'll explore the major body systems. You'll learn about the circulatory system that transports materials throughout your body, the respiratory system that brings in oxygen, the digestive system that processes food, the nervous system that controls everything, and how all these systems work together. Get ready to discover the amazing systems that make you, you!`,
        sections: [
            {
                title: "The Circulatory System: Your Body's Transportation Network",
                content: `Your circulatory system is like a vast transportation network, delivering essential materials to every cell in your body. At the center is your heart—a powerful muscle that pumps blood through thousands of miles of blood vessels.

**The Heart: The System's Pump**

Your heart is about the size of your fist and works tirelessly, beating about 100,000 times per day! It has four chambers:
- **Right Atrium**: Receives blood returning from the body
- **Right Ventricle**: Pumps blood to the lungs to pick up oxygen
- **Left Atrium**: Receives oxygen-rich blood from the lungs
- **Left Ventricle**: Pumps oxygen-rich blood to the entire body

The heart works in two phases: diastole (when it fills with blood) and systole (when it pumps blood out). This creates your heartbeat—the "lub-dub" sound you hear.

**Blood Vessels: The Transportation Routes**

- **Arteries**: Carry blood away from the heart. They have thick, muscular walls to handle high pressure.
- **Veins**: Carry blood back to the heart. They have valves to prevent blood from flowing backward.
- **Capillaries**: Tiny vessels where materials are exchanged with cells. They're so small that red blood cells must pass through single-file!

**Blood: The Transport Medium**

Blood is a complex fluid containing:
- **Red blood cells**: Carry oxygen using a protein called hemoglobin
- **White blood cells**: Fight infections and diseases
- **Platelets**: Help form blood clots to stop bleeding
- **Plasma**: The liquid portion that carries nutrients, hormones, and waste products

**The Circulatory System's Jobs:**
1. Delivers oxygen and nutrients to cells
2. Removes waste products like carbon dioxide
3. Transports hormones and other chemical messengers
4. Helps regulate body temperature
5. Fights infections through white blood cells`,
                activity: "Heart Rate Investigation: Measure your resting heart rate. Then do 30 jumping jacks and measure it again. What happened? Why? Research how exercise affects the circulatory system."
            },
            {
                title: "The Respiratory System: Breathing Life Into Your Body",
                content: `Your respiratory system brings oxygen into your body and removes carbon dioxide—a waste product your cells produce. Every breath you take is part of this essential system.

**The Pathway of Air:**

1. **Nose and Mouth**: Air enters through your nostrils or mouth. Your nose has tiny hairs and mucus that filter and warm the air.

2. **Pharynx and Larynx**: The pharynx (throat) is a passageway for both air and food. The larynx (voice box) contains your vocal cords and prevents food from entering your airway.

3. **Trachea**: Also called the windpipe, this tube carries air to your lungs. It's lined with cilia—tiny hair-like structures that sweep mucus and particles upward.

4. **Bronchi and Bronchioles**: The trachea branches into two bronchi (one for each lung), which branch into smaller bronchioles, creating a tree-like structure.

5. **Alveoli**: At the end of the smallest bronchioles are millions of tiny air sacs called alveoli. These are where gas exchange happens!

**Gas Exchange: The System's Main Job**

Each alveolus is surrounded by capillaries. Here's what happens:
- **Oxygen** moves from the air in the alveoli into the blood in the capillaries
- **Carbon dioxide** moves from the blood into the alveoli to be breathed out

This happens through diffusion—molecules naturally move from areas of high concentration to areas of low concentration. The process is incredibly efficient: your lungs have about 300 million alveoli, creating a surface area roughly the size of a tennis court!

**Breathing: How It Works**

Breathing involves two phases:
- **Inhalation**: Your diaphragm (a muscle below your lungs) contracts and moves down, and your rib muscles contract, expanding your chest. This increases lung volume and decreases pressure, pulling air in.
- **Exhalation**: Your diaphragm and rib muscles relax, decreasing lung volume and increasing pressure, pushing air out.

You breathe automatically about 12-20 times per minute, but you can also control your breathing consciously!`,
                activity: "Lung Capacity Experiment: Measure your lung capacity using a simple experiment with a balloon and water. Research how lung capacity varies and what factors affect it."
            },
            {
                title: "The Digestive System: Processing Your Fuel",
                content: `Your digestive system breaks down food into nutrients your body can use for energy, growth, and repair. It's like a factory that processes raw materials into usable products.

**The Digestive Journey:**

1. **Mouth**: Digestion begins here! Your teeth mechanically break food into smaller pieces (mechanical digestion), while saliva contains enzymes that begin breaking down carbohydrates (chemical digestion). Your tongue helps form the food into a ball called a bolus.

2. **Esophagus**: This muscular tube uses wave-like contractions called peristalsis to push food down to your stomach. It takes about 6-8 seconds for food to travel this distance.

3. **Stomach**: Your stomach is like a mixing chamber. It churns food and mixes it with gastric juices containing acid and enzymes. The acid kills bacteria and helps break down proteins. Food stays here for 2-4 hours, turning into a soupy mixture called chyme.

4. **Small Intestine**: This is where most digestion and absorption happens! It's about 20 feet long and has three parts:
   - **Duodenum**: Receives digestive juices from the pancreas and liver
   - **Jejunum**: Where most nutrient absorption occurs
   - **Ileum**: Absorbs remaining nutrients

   The inner wall of the small intestine has millions of tiny finger-like projections called villi, which increase surface area for absorption. Nutrients pass through the villi into blood vessels and are transported throughout your body.

5. **Large Intestine**: Also called the colon, this is where water is absorbed and waste is formed. Beneficial bacteria here help break down remaining material and produce some vitamins. Waste material (feces) is stored in the rectum until elimination.

6. **Accessory Organs**:
   - **Liver**: Produces bile to break down fats, filters toxins from blood, stores glucose, and produces proteins
   - **Gallbladder**: Stores and releases bile
   - **Pancreas**: Produces enzymes for digestion and hormones like insulin

**Nutrients Your Body Needs:**
- **Carbohydrates**: Provide quick energy (found in bread, fruits, vegetables)
- **Proteins**: Build and repair tissues (found in meat, beans, nuts)
- **Fats**: Store energy and protect organs (found in oils, nuts, dairy)
- **Vitamins and Minerals**: Support various body functions (found in fruits, vegetables, whole grains)
- **Water**: Essential for all body processes`,
                activity: "Digestive System Model: Create a model showing the path food takes through your digestive system. Label each organ and explain what happens there. Research how long food stays in each part."
            },
            {
                title: "The Nervous System: Your Body's Control Center",
                content: `Your nervous system is like a super-fast communication network, sending messages throughout your body at speeds up to 268 miles per hour! It controls everything from breathing to thinking to moving your fingers.

**Two Main Parts:**

1. **Central Nervous System (CNS)**: Your brain and spinal cord
   - **Brain**: The control center. It processes information, makes decisions, stores memories, and coordinates body functions. Different parts control different functions:
     - **Cerebrum**: Thinking, learning, memory, voluntary movement
     - **Cerebellum**: Balance and coordination
     - **Brainstem**: Controls automatic functions like breathing and heartbeat
   
   - **Spinal Cord**: A bundle of nerves running down your back. It carries messages between your brain and body and can make some simple decisions on its own (like pulling your hand away from something hot).

2. **Peripheral Nervous System (PNS)**: All the nerves outside your brain and spinal cord
   - **Somatic Nervous System**: Controls voluntary movements (like moving your arm)
   - **Autonomic Nervous System**: Controls automatic functions (like heartbeat, digestion)

**How It Works:**

Nerve cells (neurons) send electrical signals called nerve impulses. When you touch something, sensory neurons send a message to your brain. Your brain processes the information and sends a message back through motor neurons to your muscles, telling them what to do. This all happens in milliseconds!

**Reflexes: Fast Responses**

Some responses happen so fast they bypass your brain! When you touch something hot, sensory neurons send a message to your spinal cord, which immediately sends a message back to move your hand. Your brain finds out about it afterward! This is a reflex—a rapid, automatic response that protects your body.`,
                activity: "Reaction Time Test: Test your reaction time using online tools or a simple ruler drop test. Research how reaction time varies and what factors affect it."
            },
            {
                title: "System Integration: Working Together",
                content: `Body systems don't work in isolation—they're constantly communicating and coordinating! Here are some examples of how systems work together:

**Exercise: A Multi-System Effort**

When you exercise, multiple systems coordinate:
- **Nervous System**: Tells your muscles to contract
- **Muscular System**: Moves your body
- **Respiratory System**: Breathes faster to get more oxygen
- **Circulatory System**: Pumps blood faster to deliver oxygen and remove carbon dioxide
- **Digestive System**: Provides glucose (sugar) for energy
- **Integumentary System** (skin): Releases sweat to cool your body

**Maintaining Homeostasis**

Your body works constantly to maintain homeostasis—a stable internal environment. For example:
- **Temperature Regulation**: When you're hot, your circulatory system brings blood to your skin, and your integumentary system releases sweat. When you're cold, blood moves away from your skin, and you shiver to generate heat.

- **Blood Sugar Regulation**: After you eat, your digestive system breaks down food, releasing glucose into your blood. Your endocrine system (hormones) signals cells to take in glucose. If blood sugar gets too low, your body releases stored glucose.

- **Water Balance**: Your urinary system filters waste from blood and maintains water balance. Your nervous and endocrine systems coordinate to make you feel thirsty when you need water.

**The Immune System: Protection**

Your immune system works with other systems to protect your body:
- **Skin** (integumentary system) provides a physical barrier
- **White blood cells** (circulatory system) fight invaders
- **Lymphatic system** filters and removes pathogens
- **Nervous system** coordinates immune responses

All these systems working together keep you healthy and functioning!`,
                activity: "System Interaction Diagram: Choose an activity (like eating, exercising, or sleeping) and create a diagram showing how at least five different body systems work together during that activity."
            }
        ],
        realWorld: `Medical professionals use systems thinking every day. When a patient has trouble breathing, doctors don't just look at the lungs. They check the heart (circulatory system), the brain (nervous system), blood oxygen levels, and other systems because they're all connected. Modern medical technology like MRIs, CT scans, and blood tests help doctors see how different body systems are working together.

Understanding body systems helps us make healthy choices. Knowing how the digestive system works helps us choose nutritious foods. Understanding the circulatory system motivates us to exercise. Learning about the nervous system helps us manage stress. When we understand our body's systems, we can take better care of ourselves!

Medical researchers use systems thinking to develop new treatments. For example, when developing treatments for diabetes, they don't just focus on blood sugar—they consider how the digestive system, endocrine system, circulatory system, and nervous system all interact.`,
        reviewQuestions: [
            "What are the main components of the circulatory system? How do they work together?",
            "Explain how the respiratory system exchanges gases. Why is this process essential?",
            "Describe the path food takes through the digestive system. What happens at each stage?",
            "How does the nervous system control body functions? Give examples of both voluntary and automatic control.",
            "Give three examples of how different body systems work together. Explain the interactions.",
            "What is homeostasis? How do body systems work together to maintain it?",
            "Why is it important to understand how body systems work together when making health decisions?"
        ],
        keyTerms: [
            { term: "Circulatory System", definition: "The system that transports blood, oxygen, nutrients, and waste products throughout the body using the heart and blood vessels." },
            { term: "Respiratory System", definition: "The system that brings oxygen into the body and removes carbon dioxide, including the lungs and airways." },
            { term: "Digestive System", definition: "The system that breaks down food into nutrients the body can use, including the stomach, intestines, and accessory organs." },
            { term: "Nervous System", definition: "The control system of the body, including the brain, spinal cord, and nerves that send messages throughout the body." },
            { term: "Homeostasis", definition: "The maintenance of a stable internal environment in the body, despite external changes." },
            { term: "Alveoli", definition: "Tiny air sacs in the lungs where gas exchange occurs between air and blood." },
            { term: "Peristalsis", definition: "Wave-like muscle contractions that move food through the digestive system." },
            { term: "Neuron", definition: "A nerve cell that transmits electrical signals throughout the nervous system." },
            { term: "Reflex", definition: "A rapid, automatic response to a stimulus that doesn't require conscious thought." },
            { term: "System Integration", definition: "How different body systems work together to maintain life and health." }
        ],
        furtherExploration: `**Research Projects:**
- Research a specific body system in depth and create a detailed presentation
- Investigate how exercise affects different body systems
- Study how diseases affect body systems and their interactions

**Hands-On Activities:**
- Measure your heart rate and breathing rate at rest and after exercise
- Create models of different body systems using everyday materials
- Keep a health journal tracking how different activities affect your body

**Career Connections:**
- Interview a healthcare professional about how they use systems thinking
- Research careers in medicine, nursing, physical therapy, or sports science
- Learn about medical technology that helps body systems function

**Technology Integration:**
- Use online simulations to explore body systems
- Research medical imaging technologies (X-rays, MRIs, CT scans)
- Explore apps that help track health metrics`
    },
    4: {
        title: "Engineering Systems",
        ngss: ["MS-ETS1-1", "MS-ETS1-2", "MS-ETS1-3"],
        objectives: [
            "Identify simple machines as basic engineering systems",
            "Explain how complex engineering systems function",
            "Describe the engineering design process as a system",
            "Understand how technology systems solve problems",
            "Analyze how engineering systems impact society"
        ],
        overview: "Engineering systems are all around you! The chair you're sitting on, the device you're reading this on, the building you're in—all designed by engineers using systems thinking. In this chapter, you'll explore simple machines as basic systems, discover how complex engineering systems work, learn about the engineering design process, and understand how technology systems solve real-world problems. Engineering systems show us how humans can design solutions by understanding how parts work together.",
        introduction: `Look around you. Almost everything you see was designed by an engineer. Your desk, your phone, the lights above you, the building you're in—all are engineering systems! Engineers are systems thinkers. They design solutions by understanding how different parts work together to achieve a goal.

Engineering systems range from simple (like a lever or pulley) to incredibly complex (like a smartphone or space station). But they all follow the same principles: parts work together, inputs become outputs, and the whole system does something useful. In this chapter, you'll discover how engineers use systems thinking to design everything from simple tools to life-changing technologies.`,
        sections: [
            {
                title: "Simple Machines: Building Blocks of Engineering",
                content: `Simple machines are the basic building blocks of engineering systems. They make work easier by changing the amount of force needed, the direction of force, or the distance over which force is applied.

**The Six Simple Machines:**

1. **Lever**: A rigid bar that pivots on a point called a fulcrum. Examples: seesaw, crowbar, scissors. Levers can multiply force or increase distance.

2. **Wheel and Axle**: A wheel attached to a rod (axle). Examples: doorknob, steering wheel, bicycle. The wheel rotates around the axle, making it easier to move things.

3. **Pulley**: A wheel with a rope or chain. Examples: flagpole, window blinds, construction cranes. Pulleys can change the direction of force or multiply force.

4. **Inclined Plane**: A slanted surface. Examples: ramp, stairs, slide. It makes it easier to move objects up or down by increasing distance.

5. **Wedge**: Two inclined planes back-to-back. Examples: axe, knife, doorstop. It splits, cuts, or holds things apart.

6. **Screw**: An inclined plane wrapped around a cylinder. Examples: jar lid, light bulb, drill bit. It converts rotational motion into linear motion.

**Compound Machines**: Most machines combine simple machines. A bicycle uses wheels and axles, levers (pedals and brakes), and screws. A car uses all six simple machines!`,
                activity: "Simple Machine Scavenger Hunt: Find examples of each simple machine in your home or school. Take photos and create a presentation showing how each one makes work easier."
            },
            {
                title: "Complex Engineering Systems",
                content: `Modern engineering systems are incredibly complex, combining many subsystems. A car, for example, has systems for propulsion, steering, braking, climate control, entertainment, safety, and more—all working together!

**Key Principles of Complex Systems:**

1. **Modularity**: Systems are built from modules (subsystems) that can be designed, tested, and replaced independently.

2. **Interfaces**: Different parts connect through well-defined interfaces. A USB port is an interface between a computer and a device.

3. **Redundancy**: Critical systems often have backup components. Airplanes have multiple engines and control systems.

4. **Feedback**: Systems monitor their own performance and adjust. A thermostat senses temperature and turns heating on or off.

**Examples of Complex Engineering Systems:**

- **Smartphones**: Combine computing, communication, sensing, power management, and display systems
- **Buildings**: Integrate structural, electrical, plumbing, HVAC, and safety systems
- **Transportation**: Cars, trains, and planes combine propulsion, navigation, communication, and safety systems
- **Power Grids**: Connect power generation, transmission, distribution, and consumption systems

**Systems Engineering**: Engineers who design complex systems must think about how all parts work together, not just individual components.`,
                activity: "System Decomposition: Choose a complex device (like a smartphone or car). Break it down into its major subsystems. Create a diagram showing how the subsystems connect and work together."
            },
            {
                title: "The Engineering Design Process",
                content: `Engineering design is itself a system—a process with defined steps that engineers follow to solve problems. This systematic approach helps ensure good solutions.

**The Design Process:**

1. **Define the Problem**: Understand what needs to be solved. Who is it for? What are the constraints?

2. **Research**: Learn about the problem, existing solutions, and relevant science.

3. **Brainstorm Solutions**: Generate many ideas without judging them initially.

4. **Select a Solution**: Choose the best idea based on criteria like cost, feasibility, and effectiveness.

5. **Design and Plan**: Create detailed plans, drawings, or models.

6. **Build a Prototype**: Create a working model to test the design.

7. **Test and Evaluate**: Test the prototype, collect data, and identify problems.

8. **Improve**: Redesign based on test results. This often leads back to earlier steps—the process is iterative!

**Systems Thinking in Design**: Good engineers think about the whole system:
- How will this affect other parts?
- What are the unintended consequences?
- How will users interact with this?
- What happens when it breaks?

**Real Example**: When designing a bridge, engineers must consider: materials (structural system), traffic flow (transportation system), environmental impact (ecosystem), maintenance (operational system), and safety (safety system).`,
                activity: "Design Challenge: Work in teams to design a solution to a local problem using the engineering design process. Document each step and create a prototype."
            },
            {
                title: "Technology Systems: Solving Real Problems",
                content: `Technology systems are engineering systems designed to solve specific problems. They combine hardware (physical components) and software (programs and data) to achieve goals.

**Types of Technology Systems:**

- **Communication Systems**: Phones, internet, satellites—connect people and information
- **Information Systems**: Computers, databases, networks—store, process, and share information
- **Control Systems**: Thermostats, autopilots, robots—automatically control processes
- **Manufacturing Systems**: Assembly lines, 3D printers—produce products efficiently
- **Transportation Systems**: GPS, traffic lights, public transit—move people and goods

**How Technology Systems Work:**

Technology systems follow the input-process-output model:
- **Input**: Data, signals, or materials enter the system
- **Process**: The system transforms inputs using algorithms, mechanical processes, or chemical reactions
- **Output**: Results, products, or information leave the system
- **Feedback**: Output information feeds back to improve the system

**Example: Smart Traffic System**
- **Input**: Traffic sensors detect vehicle presence
- **Process**: Computer analyzes traffic patterns and optimizes light timing
- **Output**: Traffic lights change to improve flow
- **Feedback**: System monitors results and adjusts

**Impact on Society**: Technology systems transform how we live, work, and interact. They solve problems but also create new challenges that require systems thinking to address.`,
                activity: "Technology System Analysis: Choose a technology system you use daily. Analyze its inputs, processes, outputs, and feedback. How does it solve problems? What are its limitations?"
            }
        ],
        realWorld: `Engineering systems solve real-world problems every day. When engineers designed the International Space Station, they had to integrate life support, power, communication, research, and living systems—all while dealing with extreme conditions. This required incredible systems thinking!

Modern cities are complex engineering systems. Traffic management systems coordinate thousands of vehicles. Water systems deliver clean water and remove waste. Energy systems power everything. Communication systems connect people. All these systems must work together for a city to function.

Engineers are now using systems thinking to address global challenges like climate change, creating renewable energy systems, efficient transportation systems, and sustainable building systems. The engineering systems of the future will need to be even more integrated and sustainable.`,
        reviewQuestions: [
            "What are the six simple machines? Give an example of each.",
            "How do complex engineering systems differ from simple machines?",
            "Describe the engineering design process. Why is it iterative?",
            "Explain the input-process-output model using a technology system example.",
            "How do engineers use systems thinking when designing solutions?",
            "Give an example of how engineering systems impact society.",
            "Why is it important to consider the whole system when designing engineering solutions?"
        ],
        keyTerms: [
            { term: "Simple Machine", definition: "A basic mechanical device that makes work easier by changing force, direction, or distance." },
            { term: "Compound Machine", definition: "A machine that combines two or more simple machines." },
            { term: "Engineering Design Process", definition: "A systematic approach engineers use to solve problems, involving defining, researching, designing, building, testing, and improving." },
            { term: "Prototype", definition: "A working model of a design used for testing and evaluation." },
            { term: "Technology System", definition: "An engineering system that combines hardware and software to solve problems." },
            { term: "Input-Process-Output Model", definition: "A way of understanding systems by tracking what goes in, what happens inside, and what comes out." },
            { term: "Feedback", definition: "Information about a system's output that is used to adjust or improve the system." },
            { term: "Systems Engineering", definition: "An approach to designing complex systems that considers how all parts work together." }
        ],
        furtherExploration: `**Research Projects:**
- Research a major engineering project (like a bridge, building, or spacecraft) and analyze its systems
- Investigate how engineering systems are addressing climate change
- Study the history of a technology system and how it has evolved

**Hands-On Activities:**
- Build models of simple machines using everyday materials
- Design and build a Rube Goldberg machine (a complex contraption using simple machines)
- Create a prototype solution to a local problem

**Career Connections:**
- Interview an engineer about how they use systems thinking
- Research engineering careers: civil, mechanical, electrical, software, systems engineering
- Visit an engineering firm or manufacturing facility

**Technology Integration:**
- Use CAD software to design a simple system
- Explore engineering simulation software
- Research how AI is being used in engineering systems`
    },
    5: {
        title: "Social Systems",
        ngss: ["MS-ESS3-4"],
        objectives: [
            "Identify different types of social systems",
            "Explain how communities function as systems",
            "Describe how economic systems work",
            "Understand government systems and their functions",
            "Analyze how social systems interact and change"
        ],
        overview: "Human societies are complex systems! Families, schools, communities, economies, and governments all function as systems with interconnected parts. In this chapter, you'll explore how social systems organize human activity, how communities function, how economic systems distribute resources, how government systems provide structure, and how all these systems interact. Understanding social systems helps us participate effectively in society and work together to solve problems.",
        introduction: `Think about your day. You woke up in a home (family system), went to school (education system), maybe bought lunch (economic system), and are protected by laws (government system). Your entire life is organized by social systems!

Social systems are created by humans to organize how we live together. They're different from natural or engineering systems because they involve people, relationships, and shared rules. But they follow the same principles: parts work together, there are inputs and outputs, and the whole system serves a purpose. In this chapter, you'll discover how social systems shape our lives and how understanding them helps us be better citizens and community members.`,
        sections: [
            {
                title: "Communities as Systems",
                content: `A community is a social system—a group of people living in the same area or sharing common interests, working together to meet needs and achieve goals.

**Components of Community Systems:**

- **People**: The members who make up the community
- **Shared Spaces**: Places where community members interact (parks, schools, community centers)
- **Shared Resources**: Things the community uses together (libraries, roads, utilities)
- **Rules and Norms**: Unwritten expectations about behavior
- **Organizations**: Formal groups that serve the community (schools, businesses, clubs)
- **Communication**: Ways community members share information

**How Communities Function:**

Communities work like ecosystems—different parts serve different functions:
- **Producers**: People who create goods or services (farmers, teachers, doctors)
- **Consumers**: People who use goods and services
- **Decomposers**: Systems that recycle resources (recycling programs, waste management)
- **Regulators**: Systems that maintain order (police, courts, community leaders)

**Community Health**: A healthy community system has:
- Strong connections between members
- Effective communication
- Shared resources and services
- Ways to solve problems together
- Opportunities for participation

**Examples**: Your school is a community system. So is your neighborhood, your city, and even online communities you're part of!`,
                activity: "Community Mapping: Create a map of your community showing all the systems: schools, businesses, parks, services, organizations. How do they connect? What would happen if one part changed?"
            },
            {
                title: "Economic Systems: Organizing Resources",
                content: `Economic systems organize how societies produce, distribute, and consume goods and services. They're complex systems involving money, markets, businesses, and consumers.

**Basic Economic Concepts:**

- **Scarcity**: Resources are limited, but wants are unlimited. Economic systems help allocate scarce resources.

- **Supply and Demand**: The relationship between how much of something is available (supply) and how much people want it (demand) determines prices.

- **Markets**: Places (physical or virtual) where buyers and sellers exchange goods and services.

- **Money**: A medium of exchange that makes trade easier than bartering.

**Types of Economic Systems:**

1. **Traditional Economy**: Based on customs and traditions. People produce what their ancestors produced.

2. **Market Economy**: Decisions made by individuals and businesses. Supply and demand determine prices. (Example: United States)

3. **Command Economy**: Government makes economic decisions. (Example: North Korea)

4. **Mixed Economy**: Combines market and command elements. Most countries have mixed economies.

**How Economic Systems Work:**

Economic systems have flows:
- **Goods and Services Flow**: From producers to consumers
- **Money Flow**: From consumers to producers (and back through wages)
- **Information Flow**: Prices, availability, quality information

**Circular Flow Model**: Shows how money, goods, and services flow between households (consumers) and businesses (producers) in a continuous cycle.`,
                activity: "Economic System Simulation: Create a classroom economy. Assign roles (producers, consumers, bankers). Use play money to buy and sell goods. Observe how the economic system functions."
            },
            {
                title: "Government Systems: Providing Structure",
                content: `Government systems provide structure, order, and services for societies. They're systems designed to make collective decisions and manage shared resources.

**Functions of Government Systems:**

1. **Make Laws**: Create rules that govern behavior
2. **Enforce Laws**: Ensure laws are followed (police, courts)
3. **Provide Services**: Education, healthcare, infrastructure, defense
4. **Manage Resources**: Protect environment, manage public lands, regulate economy
5. **Represent Citizens**: Make decisions on behalf of the people

**Levels of Government:**

- **Local Government**: Cities, towns, counties—closest to citizens
- **State/Provincial Government**: Manages larger regions
- **National Government**: Manages entire country
- **International Organizations**: Coordinate between countries (UN, EU)

**Types of Government Systems:**

- **Democracy**: People have a say in decisions (voting, representation)
- **Authoritarianism**: Power concentrated in few people
- **Monarchy**: Ruled by a king or queen
- **Republic**: Representatives make decisions for citizens

**Checks and Balances**: In democratic systems, power is divided (executive, legislative, judicial branches) so no one part has too much control. This is systems thinking applied to government!`,
                activity: "Government System Research: Research your local government structure. What services does it provide? How do citizens participate? Create a diagram showing how it functions as a system."
            },
            {
                title: "Social Networks: Connecting People",
                content: `Social networks are systems of relationships between people. They show how individuals connect and how information, resources, and influence flow through communities.

**Types of Social Connections:**

- **Family Networks**: Relationships with relatives
- **Friendship Networks**: Connections with friends
- **Professional Networks**: Work-related connections
- **Community Networks**: Connections through shared interests or location
- **Online Networks**: Digital connections through social media

**How Social Networks Function:**

Social networks have:
- **Nodes**: Individual people
- **Links**: Relationships between people
- **Clusters**: Groups of closely connected people
- **Bridges**: Connections between different clusters

**Network Effects**: The value of a network increases as more people join. A phone is more useful when more people have phones. Social media platforms become more valuable as more users join.

**Information Flow**: Ideas, news, and trends spread through social networks. Some people (influencers) have many connections and can spread information quickly.

**Social Capital**: The value that comes from social networks—trust, cooperation, shared resources, mutual support. Strong social networks make communities more resilient.`,
                activity: "Social Network Map: Create a map of your social network. Show different types of connections (family, friends, school, activities). How does information flow through your network?"
            },
            {
                title: "System Interactions: How Social Systems Connect",
                content: `Social systems don't exist in isolation—they're all connected! Economic systems affect communities. Government systems regulate economies. Social networks influence government. It's all interconnected.

**Examples of Interactions:**

- **Economy and Community**: A strong economy creates jobs, which strengthens communities. A weak economy causes problems that communities must address.

- **Government and Economy**: Governments regulate businesses, collect taxes, and provide services that support economic activity.

- **Social Networks and Economy**: Your social network can help you find jobs, learn about opportunities, and access resources.

- **Community and Government**: Communities elect government representatives and participate in decision-making. Governments provide services communities need.

**System Change**: Social systems change over time. New technologies create new economic opportunities. Demographic changes affect communities. Social movements can change government policies. Understanding these connections helps us see how change happens and how we can participate effectively.

**Challenges**: Social systems face challenges like inequality, conflict, and change. Systems thinking helps us understand root causes and develop solutions that address the whole system, not just symptoms.`,
                activity: "System Interaction Analysis: Choose a current event or issue. Analyze how different social systems (economic, government, community, social networks) interact. Create a diagram showing the connections."
            }
        ],
        realWorld: `Understanding social systems helps us address major challenges. When cities want to reduce traffic, they don't just build more roads—they consider transportation systems, economic systems (how people get to work), community systems (where people live), and government systems (planning and regulation). Systems thinking leads to better solutions like public transit, bike lanes, and mixed-use development.

Social movements use systems thinking to create change. They understand how social networks spread information, how economic systems create pressure, how government systems make decisions, and how communities organize. By working across systems, movements can create lasting change.

International organizations like the United Nations use systems thinking to address global challenges. They coordinate between governments, work with economic systems, engage communities, and leverage social networks to solve problems like climate change, poverty, and conflict.`,
        reviewQuestions: [
            "What are the main components of a community system? How do they work together?",
            "Explain how economic systems organize the production and distribution of resources.",
            "What are the main functions of government systems?",
            "How do social networks function as systems?",
            "Give three examples of how different social systems interact with each other.",
            "Why is systems thinking important for understanding social problems?",
            "How can understanding social systems help you be a better citizen?"
        ],
        keyTerms: [
            { term: "Community System", definition: "A social system where people living in the same area or sharing interests work together to meet needs." },
            { term: "Economic System", definition: "A system that organizes how a society produces, distributes, and consumes goods and services." },
            { term: "Market", definition: "A place or mechanism where buyers and sellers exchange goods and services." },
            { term: "Supply and Demand", definition: "The relationship between availability of goods/services and desire for them, which determines prices." },
            { term: "Government System", definition: "A system that provides structure, order, and services for a society through laws and institutions." },
            { term: "Social Network", definition: "A system of relationships between people showing how they connect and interact." },
            { term: "Social Capital", definition: "The value that comes from social networks, including trust, cooperation, and mutual support." },
            { term: "System Interaction", definition: "How different social systems connect and influence each other." }
        ],
        furtherExploration: `**Research Projects:**
- Research how a local community addresses a specific challenge using systems thinking
- Investigate how economic systems differ around the world
- Study how social movements use systems thinking to create change

**Hands-On Activities:**
- Participate in a community service project and observe how community systems work
- Create a model of your local economic system
- Interview community leaders about how they use systems thinking

**Career Connections:**
- Research careers in community organizing, economics, government, or social work
- Interview professionals who work with social systems
- Learn about careers that help improve social systems

**Technology Integration:**
- Use social network analysis tools to map connections
- Research how technology is changing social systems
- Explore data visualization tools for understanding social systems`
    },
    6: {
        title: "System Inputs and Outputs",
        ngss: ["MS-PS3-5", "MS-LS1-5"],
        objectives: [
            "Define inputs and outputs in systems",
            "Explain how energy flows through systems",
            "Describe material cycles in systems",
            "Understand information flow in systems",
            "Analyze how inputs and outputs affect system behavior"
        ],
        overview: "Every system has inputs and outputs! Inputs are what goes into a system—materials, energy, information. Outputs are what comes out—products, waste, results. Understanding inputs and outputs helps us understand how systems work and how to improve them. In this chapter, you'll explore how energy flows through systems, how materials cycle, how information moves, and how managing inputs and outputs is key to system success.",
        introduction: `Think about a plant. What goes in? Water, sunlight, carbon dioxide, nutrients from soil. What comes out? Oxygen, glucose (sugar), and eventually seeds or fruit. The plant is a system with clear inputs and outputs!

Every system works this way. Your body takes in food, water, and oxygen (inputs) and produces energy, waste, and carbon dioxide (outputs). A factory takes in raw materials and energy (inputs) and produces products and waste (outputs). Even your brain takes in information (inputs) and produces thoughts and decisions (outputs).

Understanding inputs and outputs is fundamental to systems thinking. It helps us see what a system needs, what it produces, and how we can improve it. In this chapter, you'll discover how inputs and outputs work in different types of systems and why they matter.`,
        sections: [
            {
                title: "Understanding Inputs and Outputs",
                content: `Inputs and outputs are fundamental to all systems. They define what a system does and how it functions.

**Inputs**: What goes INTO a system
- Materials (raw materials, food, water)
- Energy (sunlight, electricity, fuel)
- Information (data, signals, instructions)
- People (in social systems)

**Outputs**: What comes OUT of a system
- Products (goods, services, results)
- Waste (byproducts, pollution)
- Energy (heat, motion, electricity)
- Information (data, signals, decisions)

**The Transformation**: Systems transform inputs into outputs. A factory transforms raw materials into products. Your digestive system transforms food into energy and nutrients. A computer transforms data input into information output.

**System Boundaries**: Inputs cross the boundary INTO the system. Outputs cross the boundary OUT OF the system. Understanding boundaries helps us identify what's part of the system and what's outside it.`,
                activity: "Input-Output Analysis: Choose a system (like your school, a local business, or your body). List all its inputs and outputs. Create a diagram showing how inputs are transformed into outputs."
            },
            {
                title: "Energy Flow Through Systems",
                content: `Energy is a crucial input for most systems. It powers processes and enables work. Understanding energy flow helps us understand how systems function.

**Energy Inputs:**
- **Sunlight**: Powers ecosystems through photosynthesis
- **Chemical Energy**: Stored in food, fuel, batteries
- **Electrical Energy**: Powers technology systems
- **Mechanical Energy**: Motion, wind, water flow

**Energy Transformation**: Energy changes form as it flows through systems:
- Sunlight → Chemical energy (in plants)
- Chemical energy → Mechanical energy (in muscles)
- Electrical energy → Light and heat (in light bulbs)
- Mechanical energy → Electrical energy (in generators)

**Energy Efficiency**: No system is 100% efficient. Some energy is always lost as heat. This is why:
- Food chains have fewer organisms at higher levels (energy is lost at each step)
- Machines produce heat when they work
- Your body produces heat when it converts food to energy

**Energy Outputs**: Systems produce:
- Useful energy (motion, light, work)
- Waste heat (inevitable byproduct)
- Stored energy (in batteries, food, etc.)

**Conservation of Energy**: Energy can't be created or destroyed—only transformed. The total energy in a closed system stays constant, but it changes form and some becomes unusable.`,
                activity: "Energy Flow Diagram: Create a diagram showing energy flow through an ecosystem or a machine. Show how energy transforms at each step and where energy is lost."
            },
            {
                title: "Material Cycles in Systems",
                content: `Materials cycle through systems in continuous loops. Unlike energy (which flows one way), materials can be reused and recycled.

**The Carbon Cycle**: Carbon moves through Earth's systems:
1. Plants take in CO₂ from air (input)
2. Plants use carbon to build tissues
3. Animals eat plants, getting carbon
4. Animals release CO₂ through respiration (output)
5. Dead organisms decompose, releasing carbon
6. Some carbon becomes fossil fuels
7. Burning releases CO₂ back to air
8. Cycle continues!

**The Nitrogen Cycle**: Nitrogen cycles through ecosystems:
- Nitrogen in air → Bacteria fix it → Plants use it → Animals eat plants → Decomposers return it → Cycle repeats

**Water Cycle**: Water continuously cycles:
- Evaporation → Condensation → Precipitation → Collection → Evaporation (repeat)

**Material Cycles in Human Systems**: 
- **Recycling Systems**: Collect waste → Process → Create new products → Use → Collect waste (repeat)
- **Composting**: Food waste → Decomposition → Nutrients → Soil → Plants → Food (repeat)

**Closed vs. Open Systems**: 
- **Closed System**: Materials cycle within (like Earth's water cycle)
- **Open System**: Materials enter and leave (like a factory taking in materials and producing products)

Most natural systems are relatively closed. Most human-made systems are more open.`,
                activity: "Material Cycle Model: Create a model showing how a material (like carbon, water, or plastic) cycles through a system. Show inputs, processes, outputs, and how materials are reused."
            },
            {
                title: "Information Flow in Systems",
                content: `Information is a special kind of input and output. It doesn't get used up like energy or materials—it can be copied and shared!

**Information Inputs:**
- Data (numbers, measurements)
- Signals (electrical, chemical, neural)
- Instructions (commands, programs, DNA)
- Knowledge (ideas, concepts, experiences)

**Information Processing**: Systems process information:
- **Sensors**: Collect information (eyes, thermometers, cameras)
- **Processors**: Analyze information (brains, computers)
- **Storers**: Save information (memory, databases, DNA)
- **Transmitters**: Send information (nerves, wires, radio waves)

**Information Outputs:**
- Decisions (choices, actions)
- Data (results, measurements)
- Signals (commands, responses)
- Knowledge (understanding, insights)

**Feedback Loops**: Information about outputs feeds back as inputs:
- Thermostat senses temperature (information input)
- Compares to set point (processing)
- Turns heat on/off (output)
- Monitors new temperature (feedback input)
- Adjusts again (continuous loop)

**Information Systems**: 
- **Communication Systems**: Transmit information (phones, internet)
- **Control Systems**: Use information to control processes (autopilots, robots)
- **Learning Systems**: Use information to improve (AI, your brain)

**Information Quality**: Good information is:
- Accurate (correct)
- Timely (current)
- Relevant (useful)
- Complete (has all needed details)`,
                activity: "Information Flow Analysis: Choose a system that uses information (like your school's grading system or a traffic light system). Map how information flows: inputs, processing, outputs, and feedback."
            },
            {
                title: "Managing Inputs and Outputs",
                content: `Managing inputs and outputs is key to system success. Too much or too little of either can cause problems.

**Input Management:**
- **Quality Control**: Ensure inputs meet standards (clean water, good materials)
- **Quantity Control**: Right amount of inputs (enough food, not too much)
- **Timing**: Inputs arrive when needed (just-in-time delivery)
- **Diversity**: Variety of inputs (balanced diet, diverse materials)

**Output Management:**
- **Quality Control**: Ensure outputs meet standards
- **Waste Reduction**: Minimize unwanted outputs (pollution, waste)
- **Useful Outputs**: Maximize desired outputs (products, services)
- **Output Disposal**: Handle waste responsibly (recycling, treatment)

**System Optimization**: Systems work best when:
- Inputs are appropriate (right type, amount, quality)
- Outputs are useful and waste is minimized
- The system efficiently transforms inputs to outputs
- Feedback helps adjust inputs based on outputs

**Examples:**
- **Ecosystems**: Balance inputs (nutrients, water) to maintain health
- **Factories**: Optimize inputs (materials, energy) to maximize outputs (products) while minimizing waste
- **Your Body**: Needs balanced inputs (nutrients, water, oxygen) to produce healthy outputs (energy, growth, waste)
- **Schools**: Inputs (students, resources) transform into outputs (educated students, knowledge)

**Sustainability**: Sustainable systems manage inputs and outputs so they can continue functioning long-term. They:
- Use renewable inputs when possible
- Minimize waste outputs
- Recycle materials
- Balance inputs and outputs`,
                activity: "System Optimization Challenge: Choose a system and analyze its inputs and outputs. Propose ways to optimize it: improve inputs, reduce waste, increase useful outputs. Create a plan."
            }
        ],
        realWorld: `Understanding inputs and outputs helps solve real problems. When cities want to reduce waste, they analyze what goes into their waste systems and what comes out. They might change inputs (reduce packaging) or improve outputs (better recycling).

Manufacturers constantly optimize inputs and outputs. They reduce material inputs (use less), improve energy efficiency (less energy input), reduce waste outputs, and improve product quality. This saves money and helps the environment.

Environmental scientists study inputs and outputs to understand pollution. They track what goes into ecosystems (pollutants) and what comes out (effects). This helps them develop solutions that address the whole system, not just symptoms.

Healthcare professionals manage inputs and outputs in the human body. They monitor what goes in (food, medicine, oxygen) and what comes out (waste, symptoms, test results) to maintain health and treat problems.`,
        reviewQuestions: [
            "What are inputs and outputs? Give examples from different types of systems.",
            "How does energy flow through systems? Why is energy always lost?",
            "Describe how materials cycle through systems. Give an example.",
            "How does information flow through systems? How is it different from energy and materials?",
            "Why is managing inputs and outputs important for system success?",
            "Give an example of how understanding inputs and outputs helps solve a problem.",
            "What makes a system sustainable in terms of inputs and outputs?"
        ],
        keyTerms: [
            { term: "Input", definition: "What goes into a system—materials, energy, information, or other resources." },
            { term: "Output", definition: "What comes out of a system—products, waste, energy, information, or results." },
            { term: "Energy Flow", definition: "How energy moves through a system, transforming from one form to another." },
            { term: "Material Cycle", definition: "How materials move through systems in continuous loops, being reused and recycled." },
            { term: "Information Flow", definition: "How information moves through systems as inputs, is processed, and becomes outputs." },
            { term: "System Boundary", definition: "The line that separates what is inside a system from what is outside it." },
            { term: "Energy Efficiency", definition: "How well a system converts input energy into useful output energy." },
            { term: "Feedback", definition: "Information about a system's output that is used to adjust inputs or processes." },
            { term: "Sustainability", definition: "The ability of a system to continue functioning long-term by managing inputs and outputs responsibly." }
        ],
        furtherExploration: `**Research Projects:**
- Research how a specific system manages its inputs and outputs
- Investigate energy flow through a local ecosystem
- Study material cycles (carbon, water, plastic) and their impacts

**Hands-On Activities:**
- Track inputs and outputs in your daily life (food in, waste out, energy used)
- Create a model showing energy or material flow through a system
- Design a system that optimizes inputs and minimizes waste

**Career Connections:**
- Research careers in environmental science, manufacturing, or systems engineering
- Interview professionals who manage inputs and outputs in systems
- Learn about careers focused on sustainability

**Technology Integration:**
- Use sensors to measure inputs and outputs in systems
- Explore simulation software for modeling energy and material flows
- Research technology that helps optimize system inputs and outputs`
    },
    7: {
        title: "Feedback Loops",
        ngss: ["MS-LS2-4", "MS-ESS3-4"],
        objectives: [
            "Define feedback loops and their role in systems",
            "Distinguish between positive and negative feedback",
            "Explain how feedback maintains homeostasis",
            "Understand how feedback regulates systems",
            "Analyze feedback loops in different types of systems"
        ],
        overview: "Feedback loops are how systems regulate themselves! They're information pathways that connect outputs back to inputs, allowing systems to adjust and maintain balance. In this chapter, you'll discover how feedback loops work, learn the difference between positive and negative feedback, explore how feedback maintains homeostasis in living systems, and understand how feedback helps all kinds of systems stay stable and functional. Feedback loops are essential for system stability and adaptation.",
        introduction: `Your body temperature stays around 98.6°F (37°C) whether it's hot or cold outside. How? Feedback loops! When you get too hot, your body detects it (feedback) and responds by sweating and increasing blood flow to your skin. When you get too cold, your body detects it and responds by shivering and reducing blood flow to your skin. This is feedback in action!

Feedback loops are everywhere in systems. They're information pathways that tell systems how they're doing and help them adjust. Without feedback, systems can't maintain balance or adapt to changes. In this chapter, you'll discover how feedback loops work, why they're so important, and how they help systems stay stable and functional.`,
        sections: [
            {
                title: "What Are Feedback Loops?",
                content: `A feedback loop is a pathway where information about a system's output is fed back to influence the system's inputs or processes. It's like a system checking on itself and making adjustments!

**Components of Feedback Loops:**

1. **Sensor**: Detects the current state (thermometer, nerve ending, sensor)
2. **Comparator**: Compares current state to desired state (brain, computer, controller)
3. **Effector**: Makes changes (muscles, machines, processes)
4. **Output**: The result that's measured again

**The Loop**: Output → Sensor → Comparator → Effector → Output (repeat)

**Example: Thermostat**
- **Sensor**: Thermometer detects temperature
- **Comparator**: Compares to set point (e.g., 70°F)
- **Effector**: Turns heat on if too cold, off if too hot
- **Output**: Room temperature changes
- **Feedback**: New temperature is sensed, loop continues

**Why Feedback Matters**: Without feedback, systems can't:
- Maintain stability
- Adapt to changes
- Correct errors
- Optimize performance

Feedback makes systems "smart"—able to respond and adjust!`,
                activity: "Feedback Loop Identification: Find examples of feedback loops in your daily life (thermostat, body temperature, video game controls). Draw diagrams showing how each feedback loop works."
            },
            {
                title: "Negative Feedback: Maintaining Balance",
                content: `Negative feedback loops maintain stability by counteracting changes. When something increases, negative feedback decreases it. When something decreases, negative feedback increases it. This keeps systems balanced.

**How Negative Feedback Works:**

System detects change → Responds in OPPOSITE direction → Returns to balance

**Examples:**

1. **Body Temperature**:
   - Too hot → Sweat, blood vessels dilate → Cool down → Back to normal
   - Too cold → Shiver, blood vessels constrict → Warm up → Back to normal

2. **Blood Sugar**:
   - High sugar → Insulin released → Cells take in sugar → Sugar decreases
   - Low sugar → Glucagon released → Stored sugar released → Sugar increases

3. **Population Control**:
   - Too many predators → Prey decreases → Predators decrease → Balance
   - Too few predators → Prey increases → Predators increase → Balance

4. **Room Temperature** (thermostat):
   - Too hot → AC turns on → Temperature decreases
   - Too cold → Heat turns on → Temperature increases

**Homeostasis**: Negative feedback maintains homeostasis—a stable internal environment despite external changes. Your body uses negative feedback to maintain:
- Temperature
- Blood sugar
- Water balance
- Blood pressure
- And many other conditions!

**Stability**: Negative feedback creates stability. Systems with good negative feedback can handle disturbances and return to balance.`,
                activity: "Homeostasis Investigation: Research how your body maintains homeostasis for one function (temperature, blood sugar, or water balance). Create a diagram showing the negative feedback loop."
            },
            {
                title: "Positive Feedback: Amplifying Change",
                content: `Positive feedback loops amplify changes. When something increases, positive feedback increases it more. When something decreases, positive feedback decreases it more. This creates change, not stability.

**How Positive Feedback Works:**

System detects change → Responds in SAME direction → Change amplifies → Continues

**Examples:**

1. **Childbirth**:
   - Contractions begin → Release hormone → More contractions → More hormone → Baby born
   - Each step amplifies the next!

2. **Clapping**:
   - One person claps → Others join → More clapping → Even more join → Applause builds
   - The sound of clapping encourages more clapping

3. **Population Explosion**:
   - More rabbits → More babies → Even more rabbits → Population grows rapidly
   - (Eventually limited by negative feedback like food supply)

4. **Melting Ice**:
   - Ice melts → Less ice reflects sunlight → More heat absorbed → More ice melts
   - This is why climate change can accelerate!

**When Positive Feedback is Good**: 
- Amplifying signals (making sounds louder)
- Growth processes (cells dividing)
- Learning (success builds confidence, leading to more success)

**When Positive Feedback is Problematic**:
- Can lead to runaway effects
- Can destabilize systems
- Can create crises (financial crashes, ecosystem collapse)

**Balance**: Most systems use negative feedback for stability, with positive feedback for specific processes that need amplification.`,
                activity: "Positive Feedback Analysis: Find examples of positive feedback in nature or society. Analyze whether the feedback is helpful or harmful. What limits might prevent runaway effects?"
            },
            {
                title: "Feedback in Different Systems",
                content: `Feedback loops appear in all types of systems. Understanding how feedback works helps us understand how systems function and how to improve them.

**Biological Systems:**
- **Homeostasis**: Negative feedback maintains stable conditions
- **Growth**: Positive feedback amplifies growth signals
- **Immune Response**: Positive feedback amplifies immune reactions to threats

**Ecosystems:**
- **Predator-Prey Cycles**: Negative feedback balances populations
- **Succession**: Positive feedback drives ecosystem change
- **Nutrient Cycling**: Feedback maintains nutrient balance

**Engineering Systems:**
- **Thermostats**: Negative feedback maintains temperature
- **Cruise Control**: Negative feedback maintains speed
- **Autopilots**: Multiple feedback loops maintain flight

**Social Systems:**
- **Markets**: Prices provide feedback (high prices → less demand → prices drop)
- **Democracy**: Elections provide feedback on government performance
- **Education**: Grades provide feedback on learning

**Technology Systems:**
- **Search Algorithms**: Use feedback to improve results
- **Recommendation Systems**: Use feedback to personalize suggestions
- **Control Systems**: Use feedback to maintain desired states

**Feedback Quality**: Good feedback is:
- **Timely**: Happens quickly enough to matter
- **Accurate**: Reflects actual system state
- **Appropriate**: Right strength of response
- **Reliable**: Works consistently`,
                activity: "Feedback System Design: Design a feedback system for a problem (like maintaining classroom temperature, managing library book availability, or regulating playground equipment use). Include sensors, comparators, and effectors."
            },
            {
                title: "Feedback and System Behavior",
                content: `Feedback shapes how systems behave. Understanding feedback helps us predict system behavior and design better systems.

**Stable Systems**: Systems with strong negative feedback:
- Resist change
- Return to balance after disturbances
- Maintain consistent performance
- Are predictable

**Unstable Systems**: Systems with strong positive feedback or weak negative feedback:
- Amplify small changes
- Can spiral out of control
- Are unpredictable
- May collapse or transform

**Adaptive Systems**: Systems with feedback that can adjust:
- Learn from experience
- Improve over time
- Adapt to new conditions
- Evolve

**Oscillating Systems**: Systems where feedback creates cycles:
- Predator-prey populations rise and fall
- Business cycles (boom and bust)
- Day-night cycles (though driven by external input)

**Delayed Feedback**: Sometimes feedback takes time:
- Population changes affect ecosystems slowly
- Economic policies take time to show effects
- Learning takes time to show results

Delayed feedback can cause problems—by the time you see the effect, it might be too late to adjust easily.

**Multiple Feedback Loops**: Complex systems have many feedback loops working together:
- Some provide stability (negative)
- Some drive change (positive)
- Some operate on different time scales
- They interact and balance each other

Understanding these interactions is key to understanding complex systems!`,
                activity: "System Behavior Analysis: Choose a system and analyze its feedback loops. Is it stable or unstable? Why? What would happen if you changed the feedback? Create a prediction."
            }
        ],
        realWorld: `Understanding feedback loops helps solve problems. When doctors treat diabetes, they're working with feedback systems. They monitor blood sugar (sensor), compare to healthy levels (comparator), and adjust insulin (effector) to maintain balance.

Climate scientists study feedback loops in Earth's climate system. Melting ice reduces reflectivity, which increases warming, which melts more ice—a dangerous positive feedback. Understanding these loops helps predict climate change and develop solutions.

Engineers design feedback into systems to make them self-regulating. Smart grids use feedback to balance electricity supply and demand. Self-driving cars use feedback to maintain speed, stay in lanes, and avoid obstacles.

Businesses use feedback to improve. Customer feedback (output) influences product design (input). Sales data (output) influences marketing strategies (input). Employee feedback improves workplace systems.

Social systems use feedback for improvement. Elections provide feedback on government. Test scores provide feedback on education. Crime statistics provide feedback on safety systems.`,
        reviewQuestions: [
            "What is a feedback loop? What are its main components?",
            "Explain the difference between positive and negative feedback. Give examples of each.",
            "How does negative feedback maintain homeostasis? Give examples.",
            "When is positive feedback helpful? When can it be problematic?",
            "Give examples of feedback loops in biological, engineering, and social systems.",
            "How does feedback affect system behavior and stability?",
            "Why is understanding feedback loops important for solving problems?"
        ],
        keyTerms: [
            { term: "Feedback Loop", definition: "A pathway where information about a system's output is fed back to influence inputs or processes." },
            { term: "Negative Feedback", definition: "Feedback that counteracts changes, maintaining stability and balance in systems." },
            { term: "Positive Feedback", definition: "Feedback that amplifies changes, driving system transformation or growth." },
            { term: "Homeostasis", definition: "The maintenance of a stable internal environment despite external changes, achieved through negative feedback." },
            { term: "Sensor", definition: "A component that detects the current state of a system for feedback." },
            { term: "Comparator", definition: "A component that compares the current state to a desired state in a feedback loop." },
            { term: "Effector", definition: "A component that makes changes to a system based on feedback." },
            { term: "Delayed Feedback", definition: "Feedback that takes time to occur, which can affect system stability." },
            { term: "System Stability", definition: "The ability of a system to maintain balance and resist change, often through negative feedback." }
        ],
        furtherExploration: `**Research Projects:**
- Research how feedback loops maintain homeostasis in a specific body system
- Investigate feedback loops in climate systems and their effects
- Study how feedback is used in technology systems (AI, robotics, automation)

**Hands-On Activities:**
- Build a simple feedback system (like a thermostat model)
- Experiment with feedback in a system (like a classroom management system)
- Create a model showing how feedback loops work

**Career Connections:**
- Research careers that involve designing or managing feedback systems
- Interview professionals who work with feedback (engineers, doctors, managers)
- Learn about careers in control systems, automation, or systems engineering

**Technology Integration:**
- Use sensors and microcontrollers to build feedback systems
- Explore simulation software for modeling feedback loops
- Research how AI uses feedback to learn and improve`
    },
    8: {
        title: "System Boundaries",
        ngss: ["MS-LS2-2", "MS-ESS2-2"],
        objectives: [
            "Define system boundaries and their importance",
            "Distinguish between open and closed systems",
            "Explain how systems interact across boundaries",
            "Understand scale and scope in systems",
            "Analyze how boundary decisions affect system understanding"
        ],
        overview: "Where does a system begin and end? System boundaries define what's inside a system and what's outside. Understanding boundaries helps us see systems clearly, understand how they interact with their environment, and make decisions about what to include when studying systems. In this chapter, you'll explore how boundaries are defined, learn about open and closed systems, discover how systems interact across boundaries, and understand how scale and scope affect our view of systems. Boundaries are choices we make to understand systems better.",
        introduction: `Imagine studying a tree. Is the tree the system? Or is the forest the system? Or is the entire ecosystem the system? The answer depends on where you draw the boundary—what you decide to include and exclude.

System boundaries are like lines we draw to define what we're studying. They help us focus, but they're also somewhat arbitrary. A cell has boundaries (its membrane), but it's also part of a tissue, which is part of an organ, which is part of a body. Where do we draw the line?

In this chapter, you'll discover how boundaries work, why they matter, and how understanding boundaries helps us understand systems better. You'll learn about open systems (that exchange materials with their environment) and closed systems (that don't), and explore how systems interact across their boundaries.`,
        sections: [
            {
                title: "Defining System Boundaries",
                content: `A system boundary is the line that separates what is inside a system from what is outside it (the environment). Boundaries help us define what we're studying, but they're choices we make based on our purpose.

**Why Boundaries Matter:**
- Help us focus on what's relevant
- Define what the system includes
- Show what interacts with the system
- Help us understand system behavior

**Types of Boundaries:**

1. **Physical Boundaries**: Clear, visible lines
   - Cell membrane (separates cell from environment)
   - Skin (separates body from environment)
   - Walls (separate building from outside)

2. **Conceptual Boundaries**: Invisible but real
   - School district boundaries
   - Economic system boundaries
   - Social network boundaries

3. **Temporal Boundaries**: Time-based
   - A day, a year, a lifetime
   - Beginning and end of a process

**Boundary Decisions**: Where we draw boundaries depends on:
- **Purpose**: What are we trying to understand?
- **Scale**: What level are we studying?
- **Practicality**: What can we actually study?

**Example**: Studying a pond ecosystem:
- **Narrow boundary**: Just the water and organisms in it
- **Wider boundary**: Includes surrounding land, air above, groundwater below
- **Even wider**: Includes the entire watershed

Each boundary choice reveals different insights!`,
                activity: "Boundary Analysis: Choose a system and draw it with three different boundaries (narrow, medium, wide). How does each boundary change what you see? What insights does each provide?"
            },
            {
                title: "Open and Closed Systems",
                content: `Systems are classified by how they interact with their environment across boundaries.

**Closed Systems**: Exchange little or nothing with the environment
- **Materials**: Don't enter or leave (or very little)
- **Energy**: May exchange energy but not matter
- **Information**: May be isolated

**Examples of Closed Systems:**
- A sealed terrarium (materials cycle within, but energy enters as sunlight)
- A thermos bottle (minimizes heat exchange)
- Earth (relatively closed—little matter enters/leaves, but energy from sun)

**Open Systems**: Actively exchange with the environment
- **Materials**: Enter and leave freely
- **Energy**: Exchange energy
- **Information**: Exchange information

**Examples of Open Systems:**
- Your body (takes in food, water, oxygen; releases waste, CO₂)
- A factory (takes in materials, energy; produces products, waste)
- A school (students, resources enter; educated students, knowledge leave)
- Ecosystems (materials and energy flow through)

**Most Real Systems Are Open**: Truly closed systems are rare. Most systems exchange something with their environment. Even "closed" systems usually exchange energy.

**Why It Matters**: Understanding whether a system is open or closed helps us:
- Predict how it will behave
- Understand what affects it
- Design better systems
- Solve problems`,
                activity: "Open vs. Closed Classification: Classify 10 different systems as open or closed. For each, identify what crosses the boundary (materials, energy, information)."
            },
            {
                title: "System Interactions Across Boundaries",
                content: `Even with boundaries, systems interact with their environment. Understanding these interactions is crucial for understanding systems.

**Types of Interactions:**

1. **Material Exchange**: Materials cross boundaries
   - Inputs enter (food, water, materials)
   - Outputs leave (waste, products, byproducts)
   - Examples: Your body, factories, ecosystems

2. **Energy Exchange**: Energy crosses boundaries
   - Energy enters (sunlight, fuel, electricity)
   - Energy leaves (heat, motion, light)
   - Examples: Plants (sunlight in, chemical energy out), engines (fuel in, motion out)

3. **Information Exchange**: Information crosses boundaries
   - Information enters (signals, data, instructions)
   - Information leaves (signals, data, decisions)
   - Examples: Computers, nervous system, communication systems

4. **Influence Without Exchange**: Systems affect each other without direct exchange
   - Competition for resources
   - Predation
   - Cooperation
   - Examples: Competing businesses, predator-prey relationships

**Boundary Permeability**: How easily things cross boundaries
- **Permeable**: Easy exchange (like cell membranes for small molecules)
- **Semi-permeable**: Selective exchange (like cell membranes)
- **Impermeable**: No exchange (like a sealed container)

**System-Environment Relationships:**
- **Dependent**: System needs environment (most systems)
- **Independent**: System functions without environment (rare)
- **Interdependent**: System and environment depend on each other (ecosystems)`,
                activity: "Interaction Mapping: Choose a system and map all its interactions with the environment. Show what crosses the boundary in each direction. How do these interactions affect the system?"
            },
            {
                title: "Scale and Scope: Choosing the Right Boundary",
                content: `The scale and scope of our study determines where we draw boundaries. The same "thing" can be viewed as different systems depending on scale.

**Scale Levels:**

1. **Micro Scale**: Small, detailed view
   - A single cell
   - One person
   - One machine

2. **Meso Scale**: Medium view
   - A tissue or organ
   - A community
   - A factory

3. **Macro Scale**: Large, broad view
   - An ecosystem
   - A city
   - A global economy

**Example: A Tree**
- **Micro**: One leaf cell (boundary: cell membrane)
- **Meso**: The whole tree (boundary: bark, roots)
- **Macro**: Forest ecosystem (boundary: forest edges)

**Nested Systems**: Systems within systems
- Cell → Tissue → Organ → Body → Population → Ecosystem
- Each level has its own boundary
- Understanding multiple scales gives complete picture

**Scope**: What aspects we include
- **Narrow scope**: Focus on one aspect (just energy flow)
- **Broad scope**: Include many aspects (energy, materials, information, interactions)

**Choosing Boundaries**: Good boundary choices:
- Include what's relevant to your question
- Exclude what's not relevant (but be aware of it)
- Consider multiple scales
- Be flexible—boundaries can change

**Common Mistakes:**
- Drawing boundaries too narrow (miss important interactions)
- Drawing boundaries too wide (too complex to understand)
- Ignoring that boundaries are choices (treating them as fixed)`,
                activity: "Multi-Scale Analysis: Choose a system and analyze it at three different scales. Draw boundaries for each scale. What do you see at each level? How do they connect?"
            },
            {
                title: "Boundaries in Practice",
                content: `Understanding boundaries helps us in practical ways. Scientists, engineers, and problem-solvers constantly make boundary decisions.

**Scientific Research**: Scientists choose boundaries based on research questions
- Studying a cell? Boundary is the cell membrane
- Studying an ecosystem? Boundary includes the whole ecosystem
- Studying climate? Boundary might be the entire planet

**Engineering Design**: Engineers define system boundaries for design
- What's part of the system to design?
- What's the environment it interacts with?
- What interfaces are needed?

**Problem Solving**: Problem-solvers define boundaries to focus solutions
- What's part of the problem?
- What's outside the problem but affects it?
- What can we actually change?

**Examples:**

1. **City Planning**: 
   - Boundary might be city limits
   - But must consider surrounding areas (water, transportation, economy)
   - Regional planning uses wider boundaries

2. **Healthcare**:
   - Patient boundary: Just the person?
   - Family boundary: Include family systems?
   - Community boundary: Include social determinants of health?

3. **Environmental Protection**:
   - Local boundary: Just this area?
   - Watershed boundary: Include entire watershed?
   - Global boundary: Consider global impacts?

**Flexible Boundaries**: Good systems thinkers are flexible about boundaries
- Can zoom in (narrower boundary) for detail
- Can zoom out (wider boundary) for context
- Can shift boundaries as understanding grows

**Boundary Effects**: Where we draw boundaries affects:
- What we see and don't see
- What we can control and can't control
- What solutions we consider
- How we measure success`,
                activity: "Boundary Challenge: Take a current problem or issue. Redraw the system boundary three different ways. How does each boundary change possible solutions? Which boundary is most useful?"
            }
        ],
        realWorld: `Understanding boundaries helps solve complex problems. When addressing climate change, we must decide: Is the boundary just our country? The whole planet? The solar system? Each boundary reveals different aspects and requires different solutions.

Urban planners use boundary thinking. A transportation problem might seem local, but widening the boundary reveals regional traffic patterns, economic factors, and environmental impacts. Solutions that consider wider boundaries are often more effective.

Healthcare providers use boundary thinking. Treating a patient (narrow boundary) is different from treating a patient within their family system (wider boundary), which is different from addressing community health (even wider boundary). Each boundary level requires different approaches.

Environmental scientists constantly make boundary decisions. Studying a polluted river requires understanding the watershed boundary, not just the river itself. Air pollution requires understanding regional or even global boundaries.

Businesses use boundary thinking for strategy. A company boundary might be just the company, but understanding the industry boundary, market boundary, or global boundary helps make better decisions.`,
        reviewQuestions: [
            "What is a system boundary? Why are boundaries important?",
            "Explain the difference between open and closed systems. Give examples.",
            "How do systems interact with their environment across boundaries?",
            "How does scale affect where we draw system boundaries?",
            "Give an example of nested systems with different boundaries.",
            "Why is it important to be flexible about system boundaries?",
            "How does where we draw boundaries affect problem-solving?"
        ],
        keyTerms: [
            { term: "System Boundary", definition: "The line that separates what is inside a system from what is outside it (the environment)." },
            { term: "Open System", definition: "A system that actively exchanges materials, energy, or information with its environment." },
            { term: "Closed System", definition: "A system that exchanges little or nothing with its environment." },
            { term: "Environment", definition: "Everything outside a system's boundary that can affect or be affected by the system." },
            { term: "Boundary Permeability", definition: "How easily materials, energy, or information can cross a system boundary." },
            { term: "Scale", definition: "The level of detail or scope at which a system is viewed (micro, meso, macro)." },
            { term: "Nested Systems", definition: "Systems that exist within other systems, each with its own boundary." },
            { term: "System-Environment Interaction", definition: "How systems and their environments affect each other across boundaries." }
        ],
        furtherExploration: `**Research Projects:**
- Research how scientists define boundaries in a specific field (ecology, economics, engineering)
- Investigate how boundary decisions affect environmental policy
- Study how scale affects understanding in a specific domain

**Hands-On Activities:**
- Draw boundaries for the same system at different scales
- Analyze how a problem changes when you change its boundary
- Create models showing nested systems with different boundaries

**Career Connections:**
- Research careers that involve defining system boundaries
- Interview professionals about how they choose boundaries
- Learn about careers in systems analysis, planning, or research

**Technology Integration:**
- Use mapping tools to visualize system boundaries
- Explore GIS (Geographic Information Systems) for spatial boundaries
- Research how technology helps analyze systems at different scales`
    },
    9: {
        title: "Modeling Systems",
        ngss: ["MS-ETS1-4", "MS-PS1-1"],
        objectives: [
            "Understand what models are and why we use them",
            "Identify different types of models",
            "Create and use physical models",
            "Understand computer and mathematical models",
            "Recognize model limitations and when to use different models"
        ],
        overview: "How do we understand systems that are too big, too small, too fast, too slow, or too complex to study directly? We use models! Models are simplified representations of systems that help us understand, predict, and work with systems. In this chapter, you'll explore different types of models—physical models you can touch, computer models that simulate systems, and mathematical models that describe relationships. You'll learn how to create models, use them to understand systems, and recognize their limitations. Modeling is a powerful tool for systems thinking!",
        introduction: `Imagine trying to understand how a hurricane forms. You can't create a real hurricane in a lab! But you can create a model—a simplified representation that shows the key parts and how they work together.

Models are everywhere in science and engineering. Architects build scale models of buildings. Scientists use computer models to predict climate change. Doctors use anatomical models to understand the body. Even a map is a model—a simplified representation of the real world.

Models help us understand systems by:
- Simplifying complexity
- Making the invisible visible
- Allowing safe experimentation
- Enabling predictions
- Communicating ideas

In this chapter, you'll discover how models work, learn to create different types of models, and understand how to use models effectively while recognizing their limitations.`,
        sections: [
            {
                title: "What Are Models?",
                content: `A model is a simplified representation of a system that helps us understand, predict, or work with the real system. Models aren't perfect copies—they're simplified versions that capture important features.

**Why We Use Models:**

1. **Too Big**: Can't study the whole solar system directly
2. **Too Small**: Can't see atoms directly
3. **Too Fast**: Can't observe chemical reactions in detail
4. **Too Slow**: Can't wait millions of years to see evolution
5. **Too Dangerous**: Can't experiment with real diseases
6. **Too Complex**: Real systems have too many parts to understand all at once

**What Models Include:**
- Important parts and relationships
- Key processes and interactions
- Essential features

**What Models Leave Out:**
- Unimportant details
- Minor interactions
- Features not relevant to the question

**Model Trade-offs**: 
- **Simple models**: Easy to understand but less accurate
- **Complex models**: More accurate but harder to understand
- **Good models**: Balance simplicity and accuracy for their purpose

**Types of Models:**
- **Physical Models**: 3D representations you can touch
- **Diagrams**: 2D representations on paper or screen
- **Computer Models**: Digital simulations
- **Mathematical Models**: Equations describing relationships
- **Conceptual Models**: Ideas and mental models`,
                activity: "Model Identification: Find 10 different models in your daily life (maps, diagrams, scale models, computer simulations). What system does each model represent? What does it include? What does it leave out?"
            },
            {
                title: "Physical Models: Building to Understand",
                content: `Physical models are 3D representations you can build, touch, and manipulate. They help us understand systems by making them tangible.

**Types of Physical Models:**

1. **Scale Models**: Smaller or larger copies
   - Model airplanes, cars, buildings
   - Solar system models (planets scaled down)
   - Cell models (enlarged to see details)

2. **Functional Models**: Work like the real system
   - Working model of a water cycle
   - Model volcano that erupts
   - Simple machine demonstrations

3. **Anatomical Models**: Show structure
   - Skeleton models
   - Organ models
   - Plant models

4. **Prototypes**: Test versions of designs
   - Engineering prototypes
   - Product mockups
   - Architectural models

**Building Physical Models:**

**Materials**: Use everyday materials
- Cardboard, clay, paper, LEGO, craft supplies
- Recycled materials
- 3D printing

**Process**:
1. Identify key components
2. Decide on scale
3. Choose materials
4. Build components
5. Connect components to show relationships
6. Test and refine

**Benefits of Physical Models:**
- Hands-on learning
- Visual and tactile understanding
- Can manipulate and experiment
- Help communicate ideas
- Reveal problems in thinking

**Limitations:**
- May oversimplify
- Can't show everything
- May not work exactly like real system
- Can be time-consuming to build`,
                activity: "Build a System Model: Choose a system and build a physical model of it. Include the main components and show how they connect. Present your model and explain what it shows."
            },
            {
                title: "Computer Models: Digital Simulations",
                content: `Computer models use software to simulate how systems work. They can handle complexity that physical models can't and allow experimentation that would be impossible or dangerous in real life.

**Types of Computer Models:**

1. **Simulations**: Model system behavior over time
   - Weather simulations
   - Population growth models
   - Ecosystem simulations
   - Traffic flow models

2. **Visualizations**: Show system structure or data
   - 3D models of molecules
   - Maps with data layers
   - Network diagrams
   - Flowcharts

3. **Interactive Models**: You can change inputs and see effects
   - Climate change simulators
   - Economic models
   - Engineering design tools
   - Educational simulations

**How Computer Models Work:**

1. **Input**: Define starting conditions and parameters
2. **Rules**: Program how components interact (algorithms)
3. **Processing**: Computer calculates what happens
4. **Output**: Shows results (graphs, animations, data)

**Advantages:**
- Handle complexity
- Run fast (can simulate years in seconds)
- Safe experimentation
- Can test many scenarios
- Visual and interactive
- Can incorporate real data

**Limitations:**
- Only as good as the rules programmed
- May oversimplify reality
- Require computers and software
- Can be expensive to develop
- Need to validate with real data

**Examples:**
- Climate models predict future climate
- Flight simulators train pilots
- Video games simulate physics
- Spreadsheet models predict business outcomes`,
                activity: "Computer Model Exploration: Find and use an online simulation or computer model (like a climate simulator, ecosystem model, or physics simulation). Experiment with different inputs. What do you learn?"
            },
            {
                title: "Mathematical Models: Describing Relationships",
                content: `Mathematical models use equations and formulas to describe how systems work. They capture relationships between variables mathematically.

**Types of Mathematical Models:**

1. **Linear Models**: Relationships that are straight lines
   - y = mx + b
   - Example: Cost = (price per item) × (number of items) + fixed cost

2. **Exponential Models**: Things that grow or shrink rapidly
   - Population growth
   - Radioactive decay
   - Compound interest

3. **Cyclical Models**: Things that repeat
   - Day-night cycle
   - Seasons
   - Predator-prey cycles

**Using Mathematical Models:**

**Identify Variables**: What changes?
- Independent variable (input): What you control or measure
- Dependent variable (output): What results

**Find Relationships**: How do variables relate?
- Direct relationship: As one increases, other increases
- Inverse relationship: As one increases, other decreases
- Complex relationships: Multiple factors interact

**Create Equations**: Write formulas describing relationships

**Test Models**: Compare predictions to real data

**Example: Population Growth**
- Variables: Population size, time, growth rate
- Relationship: Population grows exponentially
- Model: P = P₀ × (1 + r)ᵗ
- Use: Predict future population

**Advantages:**
- Precise and quantitative
- Can make predictions
- Can test many scenarios quickly
- Reveal patterns and relationships
- Universal language

**Limitations:**
- May oversimplify
- Require mathematical skills
- Need data to create
- May not capture all factors`,
                activity: "Mathematical Model Creation: Choose a simple system and create a mathematical model. Identify variables, find relationships, write an equation, and use it to make predictions."
            },
            {
                title: "Model Limitations and Validation",
                content: `All models have limitations. Understanding these limitations helps us use models effectively and know when to trust their predictions.

**Model Limitations:**

1. **Simplification**: Models leave things out
   - Real systems are more complex
   - May miss important factors
   - Assumptions may be wrong

2. **Scale Issues**: Models may not work at all scales
   - Small-scale model may not predict large-scale behavior
   - Time scale may be different

3. **Context**: Models work in specific conditions
   - May not apply in different situations
   - Assumptions may not hold elsewhere

4. **Accuracy**: Models are approximations
   - Not perfect predictions
   - Have uncertainty
   - May have errors

**Validating Models:**

**Compare to Reality**: Do model predictions match real observations?
- Test with known data
- Compare to experiments
- Check against real systems

**Sensitivity Analysis**: How do changes in inputs affect outputs?
- Test different scenarios
- Identify critical factors
- Understand uncertainty

**Peer Review**: Other experts evaluate the model
- Check assumptions
- Verify calculations
- Suggest improvements

**Continuous Improvement**: Good models are refined over time
- Update with new data
- Improve based on feedback
- Add complexity as needed

**Using Models Wisely:**
- Understand what the model includes and excludes
- Know the model's limitations
- Use models appropriate for your question
- Validate models with real data
- Combine multiple models for complete picture
- Don't confuse model with reality`,
                activity: "Model Evaluation: Choose a model (from science, engineering, or daily life). Evaluate it: What does it show well? What are its limitations? When would you trust it? When wouldn't you?"
            }
        ],
        realWorld: `Models are essential tools for understanding and solving problems. Climate scientists use computer models to predict future climate. These models combine physics, chemistry, and biology to simulate Earth's climate system. While not perfect, they help us understand trends and plan for the future.

Engineers use models throughout the design process. They create computer models to test designs before building, saving time and money. They build prototypes (physical models) to test in real conditions. Models help them predict how designs will perform.

Medical researchers use models to understand diseases and test treatments. They use computer models to simulate how drugs work in the body, animal models to test safety, and cell models to understand disease mechanisms. Models help develop treatments faster and safer.

Urban planners use models to plan cities. They use computer models to simulate traffic flow, predict population growth, and test different planning scenarios. Models help them make better decisions about infrastructure and development.

Businesses use models to make decisions. Financial models predict profits and losses. Market models predict customer behavior. Operations models optimize processes. Models help businesses plan and adapt.`,
        reviewQuestions: [
            "What is a model? Why do we use models to study systems?",
            "Describe the different types of models. Give examples of each.",
            "What are the advantages and limitations of physical models?",
            "How do computer models work? What are their strengths and weaknesses?",
            "What is a mathematical model? How are they created and used?",
            "Why is it important to understand model limitations?",
            "How do scientists and engineers validate models?"
        ],
        keyTerms: [
            { term: "Model", definition: "A simplified representation of a system that helps us understand, predict, or work with the real system." },
            { term: "Physical Model", definition: "A 3D representation of a system that can be built, touched, and manipulated." },
            { term: "Computer Model", definition: "A digital simulation of a system created using software and algorithms." },
            { term: "Mathematical Model", definition: "Equations and formulas that describe relationships in a system." },
            { term: "Simulation", definition: "A computer model that shows how a system behaves over time." },
            { term: "Prototype", definition: "A test version of a design, often a physical model used for testing." },
            { term: "Model Validation", definition: "The process of checking whether a model accurately represents the real system." },
            { term: "Model Limitation", definition: "A way in which a model is incomplete, inaccurate, or doesn't represent the full reality of a system." },
            { term: "Scale Model", definition: "A physical model that is proportionally smaller or larger than the real system." }
        ],
        furtherExploration: `**Research Projects:**
- Research how models are used in a specific field (climate science, engineering, medicine)
- Investigate famous models and their impact (climate models, economic models, disease models)
- Study how models have evolved over time

**Hands-On Activities:**
- Build physical models of different systems
- Use online simulations to explore systems
- Create mathematical models for simple systems
- Compare different models of the same system

**Career Connections:**
- Research careers that involve creating or using models
- Interview professionals who use models in their work
- Learn about careers in modeling, simulation, or data science

**Technology Integration:**
- Use modeling software (CAD, simulation tools, spreadsheet models)
- Explore online simulations and interactive models
- Learn programming to create simple models
- Use 3D printing to create physical models`
    },
    10: {
        title: "System Change Over Time",
        ngss: ["MS-LS4-1", "MS-ESS2-3"],
        objectives: [
            "Understand how systems evolve and change",
            "Explain adaptation in systems",
            "Describe succession in ecosystems",
            "Analyze long-term changes in systems",
            "Understand how systems respond to disturbances"
        ],
        overview: "Systems aren't static—they change! Over seconds, days, years, or millennia, systems evolve, adapt, and transform. Understanding how systems change helps us predict the future, manage systems effectively, and appreciate the dynamic nature of our world. In this chapter, you'll explore how systems evolve, learn about adaptation and succession, discover patterns in system change, and understand how systems respond to disturbances. Change is a fundamental characteristic of all systems.",
        introduction: `Look at a photo of your neighborhood from 50 years ago. What's different? Buildings, roads, trees, people—everything has changed! Systems are constantly changing.

Some changes happen quickly: Your heart rate increases when you exercise. Some changes happen slowly: A forest grows over decades. Some changes are dramatic: A volcano erupts and transforms a landscape. Some changes are gradual: Continents drift over millions of years.

Understanding how systems change helps us:
- Predict what might happen
- Manage systems effectively
- Appreciate the dynamic nature of our world
- Make better decisions

In this chapter, you'll discover the many ways systems change and how understanding change helps us understand systems better.`,
        sections: [
            {
                title: "How Systems Evolve",
                content: `Systems evolve—they change over time in response to internal processes and external forces. Evolution happens in all types of systems, not just biological ones.

**Forces of Change:**

1. **Internal Forces**: Changes from within the system
   - Growth and development
   - Aging and decay
   - Internal conflicts or cooperation
   - Self-organization

2. **External Forces**: Changes from the environment
   - Climate change
   - New technologies
   - Competition
   - Disturbances (fires, floods, disasters)

3. **Interactions**: Changes from how parts interact
   - Feedback loops
   - Competition
   - Cooperation
   - Emergent properties

**Patterns of Change:**

- **Linear**: Steady, predictable change (like aging)
- **Cyclical**: Repeating patterns (seasons, day-night)
- **Exponential**: Rapid growth or decline (population explosions)
- **Sigmoid**: S-shaped growth (slow start, rapid growth, leveling off)
- **Chaotic**: Unpredictable, sensitive to initial conditions

**Examples:**

- **Biological Evolution**: Species change over generations through natural selection
- **Technological Evolution**: Technologies improve and change over time
- **Social Evolution**: Societies change as they adapt to new conditions
- **Ecological Succession**: Ecosystems change in predictable ways

**Rate of Change**: Systems change at different rates
- Fast: Seconds to days (weather, markets)
- Medium: Months to years (populations, technologies)
- Slow: Decades to millennia (ecosystems, geological processes)`,
                activity: "Change Over Time Investigation: Choose a system and research how it has changed over time. Create a timeline showing key changes. What forces drove the changes?"
            },
            {
                title: "Adaptation: Systems Responding to Change",
                content: `Adaptation is how systems adjust to changes in their environment or internal conditions. Adaptive systems can survive and thrive in changing conditions.

**Biological Adaptation:**
- **Structural**: Physical changes (thicker fur in cold climates)
- **Behavioral**: Changes in behavior (migration, hibernation)
- **Physiological**: Internal changes (acclimatization to altitude)
- **Evolutionary**: Changes over generations (natural selection)

**System Adaptation:**
- **Ecosystems**: Adapt to climate change, new species, disturbances
- **Organizations**: Adapt to market changes, new technologies, competition
- **Communities**: Adapt to demographic changes, economic shifts, new challenges
- **Technologies**: Adapt through updates, improvements, new versions

**How Adaptation Works:**

1. **Detect Change**: System senses environmental or internal changes
2. **Respond**: System makes adjustments
3. **Evaluate**: System checks if adaptation worked
4. **Refine**: System improves adaptation over time

**Adaptive Capacity**: Some systems adapt better than others
- **High Adaptive Capacity**: Flexible, diverse, can change easily
- **Low Adaptive Capacity**: Rigid, specialized, resists change

**Resilience**: Adaptive systems are resilient—they can:
- Absorb disturbances
- Recover from shocks
- Transform when necessary
- Maintain essential functions

**Examples:**
- **Desert Plants**: Adapted to conserve water (small leaves, deep roots)
- **Cities**: Adapt to population growth (expand infrastructure)
- **Businesses**: Adapt to market changes (new products, services)
- **Your Body**: Adapts to exercise (stronger muscles, better fitness)`,
                activity: "Adaptation Case Study: Research how a specific system (species, ecosystem, organization, technology) has adapted to change. What adaptations did it make? Were they successful?"
            },
            {
                title: "Succession: Predictable Change in Ecosystems",
                content: `Ecological succession is the predictable process by which ecosystems change over time. It shows how systems evolve from simple to complex.

**Primary Succession**: Starts on bare rock or new land
1. **Pioneer Species**: First organisms (lichens, mosses) break down rock
2. **Soil Formation**: Dead organisms create soil
3. **Grasses and Shrubs**: Can grow in thin soil
4. **Small Trees**: Take root as soil deepens
5. **Forest**: Mature ecosystem develops
6. **Climax Community**: Stable, mature ecosystem

**Secondary Succession**: Starts after disturbance (fire, flood, logging)
- Faster than primary succession (soil already exists)
- Similar stages but quicker
- May return to similar climax community

**Succession Stages:**

- **Early Stage**: Few species, simple food webs, rapid change
- **Middle Stage**: More species, complex interactions, moderate change
- **Late Stage**: Many species, complex food webs, stable, slow change

**Factors Affecting Succession:**
- Climate
- Soil conditions
- Available species
- Disturbances
- Human activity

**Succession as a System Process:**
- Shows how systems self-organize
- Demonstrates feedback (each stage prepares for next)
- Shows adaptation over time
- Illustrates system evolution

**Not Just Ecosystems**: Succession-like processes happen in:
- **Technology**: Simple → Complex (phones, computers)
- **Organizations**: Start-up → Mature company
- **Communities**: New settlement → Established town`,
                activity: "Succession Observation: Find a local area that shows succession (abandoned lot, recovering forest, new park). Observe and document the stages. Predict what will happen next."
            },
            {
                title: "Long-Term Changes: Slow but Significant",
                content: `Some system changes happen so slowly we barely notice them, but they're incredibly significant over long time periods.

**Geological Changes:**
- **Plate Tectonics**: Continents move centimeters per year, but over millions of years create mountains, oceans, continents
- **Erosion**: Water and wind slowly wear down mountains
- **Deposition**: Sediments slowly build up new landforms
- **Climate Cycles**: Ice ages come and go over tens of thousands of years

**Biological Evolution:**
- **Natural Selection**: Small changes accumulate over generations
- **Speciation**: New species form over thousands to millions of years
- **Extinction**: Species disappear, sometimes gradually, sometimes suddenly
- **Coevolution**: Species evolve together (flowers and pollinators)

**Social Changes:**
- **Cultural Evolution**: Ideas, customs, technologies change over generations
- **Language Evolution**: Languages change slowly over centuries
- **Economic Development**: Economies evolve over decades and centuries
- **Political Systems**: Governments and institutions evolve

**Technological Evolution:**
- **Incremental Improvement**: Small improvements accumulate
- **Paradigm Shifts**: Major changes in how things work
- **Obsolescence**: Old technologies replaced by new ones

**Studying Long-Term Change:**
- **Historical Records**: Documents, artifacts, fossils
- **Tree Rings**: Show annual growth and climate
- **Ice Cores**: Show climate over thousands of years
- **Fossils**: Show evolution over millions of years
- **Geological Layers**: Show Earth's history

**Why It Matters**: Understanding long-term change helps us:
- Predict future changes
- Understand current conditions
- Make long-term decisions
- Appreciate system history`,
                activity: "Long-Term Change Research: Research how a system has changed over a long time period (decades, centuries, or millennia). What patterns do you see? What caused the changes?"
            },
            {
                title: "Disturbances and System Response",
                content: `Disturbances are events that disrupt systems. How systems respond to disturbances reveals a lot about their resilience and adaptability.

**Types of Disturbances:**

1. **Natural Disturbances**:
   - Fires, floods, hurricanes, earthquakes
   - Droughts, disease outbreaks
   - Volcanic eruptions, meteor impacts

2. **Human Disturbances**:
   - Pollution, deforestation, urbanization
   - Introduction of invasive species
   - Climate change, overfishing

3. **Internal Disturbances**:
   - Disease in organisms
   - System failures
   - Conflicts in social systems

**System Responses:**

1. **Resistance**: System resists change, maintains function
   - Strong systems absorb disturbances
   - Example: Healthy forest resists disease

2. **Resilience**: System bounces back after disturbance
   - Returns to original state
   - Example: Forest recovers after fire

3. **Transformation**: System changes to new state
   - Adapts to new conditions
   - Example: Ecosystem changes after climate shift

4. **Collapse**: System breaks down
   - Can't maintain function
   - May lead to new system forming

**Factors Affecting Response:**
- **Magnitude**: How big is the disturbance?
- **Frequency**: How often do disturbances occur?
- **System Health**: Was system healthy before?
- **Adaptive Capacity**: Can system adjust?
- **Recovery Time**: How long to recover?

**Disturbance as Part of Systems**: Some disturbances are natural and necessary
- Fires can renew ecosystems
- Floods can replenish nutrients
- Disturbances create opportunities for change

**Managing Disturbances**: Understanding disturbances helps us:
- Prepare for them
- Build resilient systems
- Recover more quickly
- Prevent harmful ones`,
                activity: "Disturbance Analysis: Research a specific disturbance (natural disaster, disease outbreak, economic crisis). Analyze how different systems responded. Which were resilient? Which transformed? Which collapsed?"
            }
        ],
        realWorld: `Understanding system change helps us address major challenges. Climate scientists study how Earth's systems are changing to predict future conditions and develop solutions. They understand that changes are happening at multiple time scales and in interconnected systems.

Conservation biologists use understanding of succession and adaptation to restore ecosystems. They know that ecosystems change over time and can help guide that change toward healthy states.

Urban planners understand that cities are constantly changing. They plan for growth, adaptation, and resilience to disturbances like natural disasters or economic changes.

Businesses must adapt to changing markets, technologies, and customer needs. Companies that understand how to adapt survive and thrive. Those that resist change often fail.

Healthcare providers understand how bodies change over time—growth, aging, adaptation to conditions. This helps them promote health and treat problems effectively.`,
        reviewQuestions: [
            "How do systems evolve and change over time? What forces drive change?",
            "What is adaptation? Give examples of adaptation in different types of systems.",
            "Describe ecological succession. What are the stages?",
            "Give examples of long-term changes in geological, biological, and social systems.",
            "How do systems respond to disturbances? What factors affect their response?",
            "What is resilience? How does it differ from resistance?",
            "Why is understanding system change important for solving problems?"
        ],
        keyTerms: [
            { term: "System Evolution", definition: "How systems change over time in response to internal processes and external forces." },
            { term: "Adaptation", definition: "How systems adjust to changes in their environment or internal conditions." },
            { term: "Ecological Succession", definition: "The predictable process by which ecosystems change from simple to complex over time." },
            { term: "Primary Succession", definition: "Succession that starts on bare rock or new land with no soil." },
            { term: "Secondary Succession", definition: "Succession that occurs after a disturbance when soil already exists." },
            { term: "Climax Community", definition: "A stable, mature ecosystem that represents the final stage of succession." },
            { term: "Disturbance", definition: "An event that disrupts a system, such as a fire, flood, or human activity." },
            { term: "Resilience", definition: "The ability of a system to bounce back or recover after a disturbance." },
            { term: "Resistance", definition: "The ability of a system to resist change and maintain function during a disturbance." }
        ],
        furtherExploration: `**Research Projects:**
- Research how a specific ecosystem has changed over time
- Investigate how a technology has evolved
- Study how a social system has adapted to change

**Hands-On Activities:**
- Observe and document changes in a local system over time
- Create a timeline showing system evolution
- Design an experiment to test how a system responds to disturbance

**Career Connections:**
- Research careers that involve studying system change (ecology, geology, history, anthropology)
- Interview professionals who work with changing systems
- Learn about careers in conservation, restoration, or adaptation

**Technology Integration:**
- Use time-lapse photography to show system changes
- Explore historical data to track system changes
- Use simulation software to model system evolution`
    },
    11: {
        title: "Complex Systems",
        ngss: ["MS-LS2-3", "MS-ESS3-3"],
        objectives: [
            "Define complex systems and their characteristics",
            "Explain emergent properties",
            "Understand unpredictable behavior in systems",
            "Analyze system resilience",
            "Recognize complexity in different types of systems"
        ],
        overview: "Some systems are incredibly complex! They have many parts, countless interactions, and behaviors that emerge from these interactions. Complex systems can be unpredictable, resilient, and fascinating. In this chapter, you'll explore what makes systems complex, discover emergent properties—behaviors that arise from interactions, understand why complex systems can be unpredictable, and learn about resilience in complex systems. Understanding complexity helps us work with real-world systems that don't follow simple rules.",
        introduction: `Think about an ant colony. A single ant follows simple rules, but a colony of thousands of ants creates complex behaviors: building intricate nests, finding food efficiently, defending the colony. The complexity emerges from simple interactions!

Complex systems are everywhere: ecosystems, economies, brains, cities, the internet. They have many parts that interact in countless ways, creating behaviors that are hard to predict. A small change in one part can have big effects elsewhere. The whole is greater than the sum of its parts.

In this chapter, you'll discover what makes systems complex, learn about emergent properties—behaviors that arise unexpectedly from interactions, understand why complex systems can surprise us, and explore how complex systems can be both fragile and resilient. Complexity is a fascinating aspect of systems thinking!`,
        sections: [
            {
                title: "What Makes Systems Complex?",
                content: `Complex systems have certain characteristics that make them challenging to understand and predict.

**Characteristics of Complex Systems:**

1. **Many Components**: Lots of parts
   - Ecosystems have thousands of species
   - Cities have millions of people
   - Brains have billions of neurons

2. **Many Interactions**: Components connect in many ways
   - Not just linear chains
   - Networks with many connections
   - Interactions at multiple levels

3. **Nonlinear Relationships**: Effects aren't proportional
   - Small causes can have large effects
   - Large causes might have small effects
   - Effects can be delayed

4. **Feedback Loops**: Multiple feedback loops interact
   - Positive and negative feedback
   - Loops at different time scales
   - Loops that interact with each other

5. **Adaptation**: Systems can change and learn
   - Respond to conditions
   - Evolve over time
   - Self-organize

6. **History Matters**: Past affects present
   - Systems have memory
   - Path-dependent (where you've been matters)
   - Can't just reset and start over

**Simple vs. Complex:**

- **Simple Systems**: Few parts, predictable, linear relationships
  - Example: A lever, a simple machine
  
- **Complicated Systems**: Many parts, but predictable if you understand them
  - Example: A car engine (complex but understandable)
  
- **Complex Systems**: Many parts, unpredictable, emergent behaviors
  - Example: An ecosystem, an economy, a city

**Why Complexity Matters**: Complex systems:
- Behave in unexpected ways
- Are hard to control
- Can be resilient or fragile
- Require systems thinking to understand`,
                activity: "Complexity Analysis: Choose a system and analyze its complexity. How many components? How do they interact? Is it simple, complicated, or complex? Why?"
            },
            {
                title: "Emergent Properties: The Whole is Greater",
                content: `Emergent properties are behaviors or characteristics that arise from interactions between parts but aren't present in the parts themselves. They "emerge" from the system as a whole.

**Examples of Emergent Properties:**

1. **Life**: Emerges from interactions of non-living molecules
   - Individual molecules aren't alive
   - But together they create life

2. **Consciousness**: Emerges from brain activity
   - Individual neurons don't think
   - But billions together create consciousness

3. **Traffic Patterns**: Emerge from individual drivers
   - Each driver follows simple rules
   - But together create complex traffic flows

4. **Ecosystem Stability**: Emerges from species interactions
   - Individual species just survive
   - But together create stable ecosystems

5. **Market Prices**: Emerge from individual transactions
   - Each transaction is simple
   - But together create market dynamics

**How Emergence Works:**

- **Bottom-Up**: Simple rules at lower levels create complex behavior at higher levels
- **Not Predictable**: Can't always predict what will emerge
- **Not Reducible**: Can't fully understand by studying parts alone
- **Real**: Emergent properties are real, not illusions

**Studying Emergence**: 
- Can observe and describe
- Can model and simulate
- Can't always predict
- Need to study the whole system

**Emergence in Different Systems:**
- **Biological**: Life, consciousness, behavior
- **Social**: Culture, economies, organizations
- **Technological**: Internet, AI, networks
- **Physical**: Weather, phase transitions`,
                activity: "Emergence Observation: Find examples of emergent properties in systems around you. How do simple parts create complex whole behaviors? Can you identify the simple rules that lead to emergence?"
            },
            {
                title: "Unpredictability: Why Complex Systems Surprise Us",
                content: `Complex systems can be unpredictable. Small changes can have large effects, and we can't always predict what will happen. This is both fascinating and challenging!

**Why Complex Systems Are Unpredictable:**

1. **Sensitive Dependence**: Small differences in starting conditions lead to very different outcomes
   - "Butterfly effect": A butterfly's wings might affect weather
   - Tiny changes amplify through feedback loops

2. **Nonlinearity**: Effects aren't proportional to causes
   - Doubling input doesn't always double output
   - Can have thresholds, tipping points, sudden changes

3. **Many Interactions**: Too many interactions to track
   - Can't predict all interactions
   - Interactions create new interactions

4. **Emergence**: New behaviors arise unexpectedly
   - Can't predict what will emerge
   - Emergent properties surprise us

5. **Feedback**: Multiple feedback loops interact
   - Effects feed back and amplify
   - Creates cycles and oscillations

6. **Adaptation**: Systems change as we study them
   - Our actions affect the system
   - System learns and adapts

**Chaos Theory**: Studies unpredictable systems
- Systems that are deterministic (follow rules) but unpredictable
- Sensitive to initial conditions
- Show patterns but not exact predictions

**Examples:**
- **Weather**: Can't predict exactly, but can predict trends
- **Stock Markets**: Unpredictable day-to-day, but show patterns
- **Ecosystems**: Can't predict exact outcomes, but understand general behavior
- **Traffic**: Unpredictable exact flows, but understand patterns

**Living with Unpredictability**: 
- Can't always predict exactly
- But can understand patterns
- Can prepare for possibilities
- Can build resilient systems`,
                activity: "Unpredictability Investigation: Research a complex system that shows unpredictable behavior (weather, markets, ecosystems). What makes it unpredictable? How do people work with this unpredictability?"
            },
            {
                title: "Resilience in Complex Systems",
                content: `Complex systems can be remarkably resilient—able to absorb disturbances and maintain function. But they can also be fragile—small disturbances can cause collapse.

**What is Resilience?**

Resilience is the ability of a system to:
- Absorb disturbances
- Maintain essential functions
- Recover from shocks
- Adapt and transform when necessary

**Sources of Resilience:**

1. **Diversity**: Many different components
   - If one fails, others can compensate
   - Example: Diverse ecosystem is more resilient

2. **Redundancy**: Backup components
   - Multiple ways to do the same thing
   - Example: Airplanes have backup systems

3. **Modularity**: Independent modules
   - Failure in one part doesn't collapse whole system
   - Example: Internet has many independent networks

4. **Adaptability**: Can change and learn
   - Adjusts to new conditions
   - Example: Your body adapts to exercise

5. **Feedback**: Can sense and respond
   - Detects problems and adjusts
   - Example: Ecosystems balance through feedback

**Resilience vs. Fragility:**

**Resilient Systems:**
- Can handle disturbances
- Maintain function under stress
- Recover quickly
- Transform when needed

**Fragile Systems:**
- Break easily
- Can't handle disturbances
- Don't recover well
- Collapse under stress

**Factors Affecting Resilience:**
- **Health**: Healthy systems are more resilient
- **Diversity**: Diverse systems are more resilient
- **Connections**: Right amount of connections (too few = fragile, too many = rigid)
- **Adaptability**: Adaptive systems are more resilient

**Building Resilience**: We can design systems to be more resilient:
- Increase diversity
- Build in redundancy
- Create modularity
- Enable adaptation
- Monitor and respond`,
                activity: "Resilience Analysis: Analyze a system's resilience. What makes it resilient or fragile? How could you make it more resilient? Design improvements."
            },
            {
                title: "Working with Complex Systems",
                content: `Complex systems require special approaches. We can't always predict or control them, but we can work with them effectively.

**Principles for Working with Complex Systems:**

1. **Think in Systems**: See the whole, not just parts
   - Understand interactions
   - See feedback loops
   - Recognize emergence

2. **Expect Surprises**: Be prepared for unexpected behavior
   - Don't assume predictability
   - Plan for multiple scenarios
   - Build in flexibility

3. **Monitor and Adapt**: Watch how systems behave
   - Collect data
   - Look for patterns
   - Adjust as needed

4. **Build Resilience**: Design for uncertainty
   - Increase diversity
   - Build redundancy
   - Enable adaptation

5. **Work with Nature**: Don't fight complex systems
   - Understand how they work
   - Work with their tendencies
   - Guide rather than control

6. **Learn from Failure**: Complex systems teach through experience
   - Failures reveal how systems work
   - Learn and adapt
   - Iterate and improve

**Examples:**

- **Ecosystem Management**: Work with natural processes, don't try to control everything
- **City Planning**: Plan for growth and change, build resilient infrastructure
- **Business Strategy**: Adapt to market changes, build flexible organizations
- **Healthcare**: Treat whole person, not just symptoms, support body's natural healing

**Limitations**: 
- Can't always predict
- Can't always control
- Must work with uncertainty
- Need patience and observation

**Opportunities**:
- Can harness emergence
- Can build resilience
- Can adapt and evolve
- Can create positive change`,
                activity: "Complex System Challenge: Choose a complex system problem. Apply systems thinking principles. How would you approach it? What would you monitor? How would you build resilience?"
            }
        ],
        realWorld: `Understanding complex systems helps address major challenges. Climate scientists work with Earth's complex climate system. They can't predict exactly, but they understand patterns and can guide policy to reduce risks.

Ecosystem managers work with complex ecosystems. They can't control everything, but they can monitor, understand patterns, and make interventions that work with natural processes.

Economists work with complex economic systems. They understand that markets are complex and unpredictable, but they can identify patterns and guide policy.

Healthcare providers work with the complex human body. They understand that bodies are complex systems that can't always be predicted, but they can support natural healing processes and intervene when needed.

Urban planners work with complex cities. They understand that cities are complex systems that evolve, and they plan for flexibility and resilience rather than trying to control everything.`,
        reviewQuestions: [
            "What makes a system complex? What are the key characteristics?",
            "What are emergent properties? Give examples from different types of systems.",
            "Why are complex systems often unpredictable?",
            "What is resilience? What makes systems resilient or fragile?",
            "How can we work effectively with complex systems?",
            "Give examples of complex systems and their emergent properties.",
            "Why is understanding complexity important for solving real-world problems?"
        ],
        keyTerms: [
            { term: "Complex System", definition: "A system with many components, many interactions, and emergent behaviors that are hard to predict." },
            { term: "Emergent Property", definition: "A behavior or characteristic that arises from interactions between parts but isn't present in the parts themselves." },
            { term: "Nonlinear Relationship", definition: "A relationship where effects aren't proportional to causes—small causes can have large effects." },
            { term: "Sensitive Dependence", definition: "When small differences in starting conditions lead to very different outcomes." },
            { term: "Chaos Theory", definition: "The study of systems that are deterministic but unpredictable due to sensitive dependence on initial conditions." },
            { term: "Resilience", definition: "The ability of a system to absorb disturbances, maintain function, and recover from shocks." },
            { term: "Fragility", definition: "The tendency of a system to break easily and not recover from disturbances." },
            { term: "Self-Organization", definition: "How complex systems organize themselves without central control." },
            { term: "Tipping Point", definition: "A threshold where a small change can cause a large, sudden change in a system." }
        ],
        furtherExploration: `**Research Projects:**
- Research complex systems in nature (ecosystems, brains, weather)
- Investigate how complexity science is applied to solve problems
- Study examples of system collapse and recovery

**Hands-On Activities:**
- Create simple models that show emergence (like Conway's Game of Life)
- Observe complex systems and look for emergent properties
- Experiment with building resilient systems

**Career Connections:**
- Research careers that involve working with complex systems
- Interview professionals who work with complexity
- Learn about careers in systems science, complexity science, or resilience engineering

**Technology Integration:**
- Use simulation software to explore complex systems
- Explore agent-based modeling (simulating individual agents that create complex behavior)
- Research how AI and machine learning work with complex systems`
    },
    12: {
        title: "Systems Thinking in Action",
        ngss: ["MS-ETS1-1", "MS-ESS3-3", "MS-ESS3-4"],
        objectives: [
            "Apply systems thinking to real-world problems",
            "Analyze environmental challenges using systems thinking",
            "Design engineering solutions with systems thinking",
            "Understand how systems thinking creates better solutions",
            "Plan for future applications of systems thinking"
        ],
        overview: "Now it's time to put it all together! Systems thinking isn't just a concept—it's a powerful way to solve real problems. In this final chapter, you'll apply everything you've learned to address real-world challenges. You'll see how systems thinking helps solve environmental problems, design better engineering solutions, improve social systems, and create positive change. You'll also explore how systems thinking will be essential for addressing future challenges. This chapter shows you how to use systems thinking to make a difference in the world.",
        introduction: `You've learned a lot about systems! You understand how parts work together, how energy and materials flow, how feedback regulates systems, how systems change, and how complexity creates challenges and opportunities. Now it's time to use this knowledge to solve real problems.

Systems thinking isn't just academic—it's a practical tool used by scientists, engineers, policymakers, and problem-solvers everywhere. When we see problems as systems, we can find better solutions. When we understand how parts connect, we can create positive change. When we think about the whole system, we avoid unintended consequences.

In this final chapter, you'll see systems thinking in action. You'll explore how it's used to address environmental challenges, design engineering solutions, improve communities, and plan for the future. You'll also learn how to apply systems thinking yourself to make a difference.`,
        sections: [
            {
                title: "Solving Environmental Problems",
                content: `Environmental problems are perfect examples of systems challenges. They involve complex interactions between natural systems, human systems, and engineered systems.

**Example: Ocean Plastic Pollution**

**Traditional Approach**: Clean up plastic from beaches
- Addresses symptom, not cause
- Plastic keeps coming
- Expensive and temporary

**Systems Thinking Approach**: 
- **See the Whole System**: 
  - Production (plastics made)
  - Use (products consumed)
  - Disposal (waste management)
  - Ocean systems (where plastic ends up)
  
- **Understand Connections**:
  - Economic systems drive production
  - Consumer behavior drives use
  - Waste systems affect disposal
  - Ocean currents distribute plastic
  
- **Find Leverage Points**: Places where small changes have big effects
  - Reduce production (source reduction)
  - Improve waste management
  - Change consumer behavior
  - Design better products
  
- **Address Root Causes**: Not just symptoms
  - Single-use culture
  - Linear economy (make, use, dispose)
  - Lack of recycling infrastructure

**Solutions Using Systems Thinking:**
- **Circular Economy**: Design products to be reused/recycled (closing the loop)
- **Extended Producer Responsibility**: Companies responsible for product lifecycle
- **Consumer Education**: Change behavior patterns
- **Policy Changes**: Regulations that address whole system
- **Innovation**: New materials and processes

**Results**: More effective, lasting solutions that address root causes

**Other Examples:**
- **Climate Change**: Understand energy systems, economic systems, social systems, natural systems
- **Deforestation**: Understand economic drivers, land use systems, ecosystem services
- **Water Pollution**: Understand agricultural systems, industrial systems, water cycles`,
                activity: "Environmental Problem Analysis: Choose an environmental problem. Apply systems thinking: Map the system, identify connections, find leverage points, design solutions that address root causes."
            },
            {
                title: "Engineering Better Solutions",
                content: `Engineers use systems thinking to design solutions that work better, last longer, and avoid unintended consequences.

**Example: Designing a Sustainable Building**

**Traditional Approach**: Design building for lowest cost
- Might use cheap materials
- High energy use
- Creates waste
- Doesn't consider long-term

**Systems Thinking Approach**:

**See the Whole System**:
- Building itself (structure, systems)
- Energy systems (power, heating, cooling)
- Water systems (supply, waste)
- Material systems (construction, maintenance, disposal)
- Human systems (occupants, community)
- Natural systems (site, environment)

**Consider Lifecycle**: Not just construction, but:
- **Design**: How is it designed?
- **Construction**: What materials? What waste?
- **Operation**: Energy use? Maintenance?
- **End of Life**: What happens when building is demolished?

**Design for Systems**:
- **Energy Efficiency**: Reduce energy inputs
- **Water Efficiency**: Reduce water inputs, recycle water
- **Material Efficiency**: Use less, use recycled, design for reuse
- **Waste Reduction**: Minimize waste outputs
- **Integration**: Systems work together (solar panels, rainwater collection, natural ventilation)

**Consider Interactions**:
- How does building affect local ecosystem?
- How does it affect community?
- How do occupants interact with systems?
- How do systems interact with each other?

**Results**: Buildings that:
- Use less energy and water
- Produce less waste
- Are healthier for occupants
- Are better for environment
- Cost less over lifetime (even if more upfront)

**Other Examples:**
- **Transportation Systems**: Design for whole system (vehicles, infrastructure, energy, environment)
- **Water Systems**: Consider whole water cycle (supply, use, treatment, return)
- **Energy Systems**: Design for generation, distribution, storage, use`,
                activity: "Engineering Design Challenge: Design a solution to a local problem using systems thinking. Consider the whole system, lifecycle, interactions, and unintended consequences."
            },
            {
                title: "Improving Social Systems",
                content: `Systems thinking helps improve communities, schools, organizations, and other social systems.

**Example: Improving School Systems**

**Traditional Approach**: Fix one problem at a time
- Low test scores? More testing
- Behavior problems? More discipline
- Attendance issues? Punish absences
- Each solution addresses one symptom

**Systems Thinking Approach**:

**See the Whole System**:
- Students (diverse needs, backgrounds, abilities)
- Teachers (training, support, resources)
- Curriculum (content, methods, assessment)
- Facilities (buildings, technology, resources)
- Families (involvement, support, challenges)
- Community (resources, opportunities, challenges)
- Policies (rules, funding, standards)

**Understand Connections**:
- Student learning connects to many factors
- Family support affects student success
- Teacher quality affects learning
- Resources affect what's possible
- Policies affect everything
- Community affects school

**Find Leverage Points**:
- Early childhood education (affects everything later)
- Teacher support and development
- Family engagement
- Community partnerships
- Holistic support (academic, social, emotional, physical)

**Address Root Causes**:
- Not just test scores, but learning
- Not just behavior, but underlying needs
- Not just attendance, but engagement
- Not just individual students, but whole system

**Solutions Using Systems Thinking**:
- **Wrap-around Services**: Support whole child and family
- **Community Schools**: Integrate school with community resources
- **Professional Learning Communities**: Teachers collaborate and learn
- **Restorative Practices**: Address root causes of behavior
- **Culturally Responsive Teaching**: Connect to students' backgrounds

**Results**: More effective, sustainable improvements

**Other Examples:**
- **Public Health**: Address social determinants, not just treat diseases
- **Criminal Justice**: Address root causes, not just punish
- **Economic Development**: Build whole systems, not just attract businesses`,
                activity: "Social System Improvement: Choose a social system challenge (school, community, organization). Apply systems thinking to design improvements that address root causes."
            },
            {
                title: "Systems Thinking for the Future",
                content: `The challenges of the future will require systems thinking. Climate change, population growth, technological change, and global interconnectedness create complex problems that need systems solutions.

**Future Challenges Requiring Systems Thinking:**

1. **Climate Change**: 
   - Affects all systems (natural, social, economic)
   - Requires coordinated global action
   - Needs solutions across energy, transportation, agriculture, industry
   - Must consider social and economic impacts

2. **Sustainable Development**:
   - Balance economic, social, environmental systems
   - Meet needs without compromising future
   - Requires systems thinking at all levels

3. **Global Health**:
   - Pandemics spread through interconnected systems
   - Health systems connect globally
   - Requires systems approaches to prevention and treatment

4. **Technology Integration**:
   - AI, automation, biotechnology transform systems
   - Need to understand impacts across systems
   - Requires systems thinking to guide development

5. **Urbanization**:
   - More people moving to cities
   - Cities are complex systems
   - Need systems thinking for planning and management

**Skills for the Future:**

**Systems Thinkers Will Need**:
- Ability to see connections
- Understanding of feedback and dynamics
- Comfort with complexity and uncertainty
- Ability to work across disciplines
- Skills in modeling and simulation
- Ability to collaborate across systems

**Education for Systems Thinking**:
- Learn to see systems everywhere
- Practice systems thinking on real problems
- Work across disciplines
- Use technology to model systems
- Collaborate with others

**Your Role**: As systems thinkers, you can:
- Apply systems thinking to problems you face
- Help others see systems
- Design better solutions
- Make positive change
- Prepare for future challenges`,
                activity: "Future Challenge Project: Choose a future challenge. Research it using systems thinking. Design a solution that considers the whole system. Present your solution."
            },
            {
                title: "Becoming a Systems Thinker",
                content: `Systems thinking is a skill you can develop and use throughout your life. Here's how to become a better systems thinker.

**Habits of Systems Thinkers:**

1. **Look for Connections**: Always ask "How does this connect to that?"
2. **See the Big Picture**: Zoom out to see the whole system
3. **Think in Loops**: Look for feedback and cycles
4. **Consider Time**: Think about how systems change over time
5. **Question Boundaries**: Ask "What's included? What's excluded?"
6. **Look for Patterns**: Notice recurring behaviors and structures
7. **Consider Multiple Perspectives**: See systems from different viewpoints
8. **Think About Unintended Consequences**: Consider what else might happen
9. **Look for Leverage Points**: Find where small changes have big effects
10. **Embrace Complexity**: Don't oversimplify, but find useful simplifications

**Practicing Systems Thinking:**

**In Daily Life**:
- See systems in your routines
- Understand how your actions affect systems
- Make choices considering systems

**In School**:
- Connect subjects (they're all connected!)
- See systems in what you learn
- Apply systems thinking to projects

**In Your Community**:
- Understand community systems
- See how you can contribute
- Work with others to improve systems

**Tools for Systems Thinkers**:
- **Maps and Diagrams**: Visualize systems
- **Models**: Represent systems
- **Stories**: Communicate systems understanding
- **Questions**: Probe deeper into systems
- **Experiments**: Test system understanding

**Your Systems Thinking Journey**:
- You've learned the concepts
- Now practice applying them
- Start with small systems
- Build to larger, more complex systems
- Keep learning and improving

**Remember**: Systems thinking is a way of seeing the world. The more you practice, the better you'll get. And the better you get, the more you can contribute to solving problems and creating positive change!`,
                activity: "Systems Thinking Action Plan: Create a plan for how you'll use systems thinking. What problems will you tackle? What systems will you study? How will you practice? Set goals and track your progress."
            }
        ],
        realWorld: `Systems thinking is being used to address major global challenges. The United Nations Sustainable Development Goals use systems thinking to address interconnected challenges like poverty, climate change, and inequality.

Cities around the world are using systems thinking to become more sustainable, resilient, and livable. They're integrating transportation, energy, water, waste, and social systems to create better cities.

Companies are using systems thinking to become more sustainable and resilient. They're considering their whole supply chain, their impacts on communities and environment, and their role in larger systems.

Scientists are using systems thinking to understand complex problems like climate change, disease spread, and ecosystem health. They're building models, understanding connections, and developing solutions.

Educators are using systems thinking to improve schools. They're seeing how all parts connect and designing holistic approaches that address root causes, not just symptoms.

You can use systems thinking too! Whether you're solving a problem in your community, designing a project, making decisions, or planning your future, systems thinking helps you see the bigger picture and create better solutions.`,
        reviewQuestions: [
            "How can systems thinking help solve environmental problems? Give an example.",
            "How do engineers use systems thinking to design better solutions?",
            "How can systems thinking improve social systems like schools or communities?",
            "What future challenges will require systems thinking?",
            "What are the key habits of systems thinkers?",
            "How can you practice and develop systems thinking skills?",
            "Why is systems thinking important for creating positive change?"
        ],
        keyTerms: [
            { term: "Leverage Point", definition: "A place in a system where a small change can lead to a large improvement in system behavior." },
            { term: "Root Cause", definition: "The underlying reason a problem exists, rather than just the symptoms." },
            { term: "Lifecycle Thinking", definition: "Considering all stages of a system or product from creation to disposal." },
            { term: "Unintended Consequence", definition: "An unexpected result of an action, especially a negative one that wasn't anticipated." },
            { term: "Systems Solution", definition: "A solution that addresses the whole system, not just symptoms, considering connections and root causes." },
            { term: "Sustainable Development", definition: "Development that meets current needs without compromising future generations' ability to meet their needs." },
            { term: "Circular Economy", definition: "An economic system designed to eliminate waste by reusing and recycling materials in continuous loops." },
            { term: "Holistic Approach", definition: "An approach that considers the whole system, not just individual parts." }
        ],
        furtherExploration: `**Research Projects:**
- Research how systems thinking is being used to solve a major global challenge
- Investigate systems thinking approaches in a field that interests you
- Study examples of successful systems solutions

**Hands-On Activities:**
- Apply systems thinking to a problem in your school or community
- Design a systems solution to a local challenge
- Create a systems thinking project that makes a difference

**Career Connections:**
- Research careers that use systems thinking
- Interview professionals who apply systems thinking
- Explore how different careers benefit from systems thinking

**Technology Integration:**
- Use systems thinking tools and software
- Create models of systems you want to improve
- Use data to understand systems better

**Take Action:**
- Identify a problem you care about
- Apply systems thinking to understand it
- Design a solution
- Work with others to implement it
- Make a difference!`
    }
};

async function createChapterHTML(chapterNum) {
    const chapter = completeChapters[chapterNum];
    if (!chapter) {
        throw new Error(`No content found for chapter ${chapterNum}`);
    }
    
    const templatePath = path.join(__dirname, '../templates/chapter-template.html');
    let html = await fs.readFile(templatePath, 'utf-8');
    
    // Replace basic placeholders
    html = html.replace(/\[NUMBER\]/g, chapterNum);
    html = html.replace(/\[TITLE\]/g, chapter.title);
    
    // Build learning objectives
    const objectivesHTML = chapter.objectives.map(obj => `<li>${obj}</li>`).join('\n            ');
    html = html.replace(/<li>\[Objective 1\]<\/li>\s*<li>\[Objective 2\]<\/li>\s*<li>\[Objective 3\]<\/li>/s, objectivesHTML);
    
    // Replace overview and introduction
    html = html.replace(/\[Brief overview of chapter content\]/g, chapter.overview);
    html = html.replace(/\[Introduction content\]/g, chapter.introduction);
    
    // Build main content sections
    let mainContentHTML = '';
    chapter.sections.forEach((section, index) => {
        mainContentHTML += `<h2>${section.title}</h2>\n        `;
        
        // Split content into paragraphs
        const paragraphs = section.content.split('\n\n').filter(p => p.trim());
        paragraphs.forEach(para => {
            if (para.startsWith('**') && para.includes('**')) {
                // Format bold headings
                const parts = para.split('**');
                mainContentHTML += `<h4>${parts[1]}</h4>\n        `;
                if (parts[2]) {
                    mainContentHTML += `<p>${parts[2].trim()}</p>\n        `;
                }
            } else {
                mainContentHTML += `<p>${para.trim()}</p>\n        `;
            }
        });
        
        // Add callout after first section
        if (index === 0) {
            mainContentHTML += `<div class="callout">
            <strong>Think About It:</strong> Can you identify examples of ${chapter.title.toLowerCase()} in your own life? How do they work together?
        </div>\n        `;
        }
        
        // Add activity after middle section
        if (section.activity && index === Math.floor(chapter.sections.length / 2)) {
            mainContentHTML += `<div class="activity">
            <h3>Activity: ${section.activity.split(':')[0]}</h3>
            <p>${section.activity.split(':').slice(1).join(':').trim()}</p>
        </div>\n        `;
        }
        
        mainContentHTML += '\n        ';
    });
    
    html = html.replace(/<h2>\[Section Title\]<\/h2>\s*<p>\[Content\]<\/p>/s, mainContentHTML);
    
    // Replace real-world section
    html = html.replace(/\[Real-world application content\]/g, chapter.realWorld);
    
    // Build review questions
    const questionsHTML = chapter.reviewQuestions.map(q => `<li>${q}</li>`).join('\n            ');
    html = html.replace(/<li>\[Question 1\]<\/li>\s*<li>\[Question 2\]<\/li>\s*<li>\[Question 3\]<\/li>/s, questionsHTML);
    
    // Build key terms
    const termsHTML = chapter.keyTerms.map(kt => 
        `<dt><strong>${kt.term}</strong></dt>
            <dd>${kt.definition}</dd>`
    ).join('\n        ');
    html = html.replace(/<dt><strong>\[Term\]<\/strong><\/dt>\s*<dd>\[Definition\]<\/dd>/s, termsHTML);
    
    // Replace further exploration
    html = html.replace(/\[Additional resources and activities\]/g, chapter.furtherExploration);
    
    // Remove example placeholders
    html = html.replace(/<!-- Example callout -->[\s\S]*?<\/div>/g, '');
    html = html.replace(/<!-- Example activity -->[\s\S]*?<\/div>/g, '');
    html = html.replace(/<!-- Example image -->[\s\S]*?<\/figure>/g, '');
    
    return html;
}

async function generateAllChapters() {
    console.log('🚀 Generating complete textbook chapters...\n');
    
    for (let i = 2; i <= 12; i++) {
        try {
            if (completeChapters[i]) {
                console.log(`📝 Generating Chapter ${i}: ${completeChapters[i].title}...`);
                const html = await createChapterHTML(i);
                
                const outputPath = path.join(__dirname, '../source', `chapter-${i}.html`);
                await fs.mkdir(path.dirname(outputPath), { recursive: true });
                await fs.writeFile(outputPath, html, 'utf-8');
                
                console.log(`  ✓ Chapter ${i} HTML created\n`);
            } else {
                // Use basic generator for chapters without full content yet
                const { generateChapterHTML } = require('./generate-content');
                const html = await generateChapterHTML(i);
                const outputPath = path.join(__dirname, '../source', `chapter-${i}.html`);
                await fs.mkdir(path.dirname(outputPath), { recursive: true });
                await fs.writeFile(outputPath, html, 'utf-8');
                console.log(`  ✓ Chapter ${i} HTML created (basic version)\n`);
            }
        } catch (error) {
            console.error(`  ✗ Error generating Chapter ${i}: ${error.message}\n`);
        }
    }
    
    console.log('✅ All chapter HTML files generated!');
}

if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args[0] === '--all') {
        generateAllChapters();
    } else {
        const chapterNum = parseInt(args[0]) || 2;
        createChapterHTML(chapterNum).then(html => {
            const outputPath = path.join(__dirname, '../source', `chapter-${chapterNum}.html`);
            return fs.writeFile(outputPath, html, 'utf-8');
        }).then(() => {
            console.log(`✓ Chapter ${chapterNum} generated`);
        }).catch(error => {
            console.error(`Error: ${error.message}`);
            process.exit(1);
        });
    }
}

module.exports = { createChapterHTML, completeChapters };
