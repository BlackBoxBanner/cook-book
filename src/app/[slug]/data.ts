import {Ingredient} from "@/components/basic/recipe";

type CookBook = {
  name: string;
  slug: string;
  date: string;
  description: string;
  ingredients: Ingredient[];
  steps: FirstStep[];
};

type FirstStep = {
  content: string;
  step?: string[];
};

export const cookbook: CookBook[] = [
  {
    name: "เลมอนเคิร์ด",
    slug: "lemon-curd",
    date: new Date("2024-06-03").toDateString(),
    description:
      "เลมอนเคิร์ด เป็นซอสลักษณะคล้ายคัสตาร์ด มีรสชาติเปรี้ยวหวานและกลิ่นหอมอ่อนๆ ของเลมอน นิยมนำไปใช้ทาขนมปัง, แครกเกอร์ หรือเป็นส่วนประกอบในขนมอื่นๆ เช่น คุกกี้ พาย หรือทาร์ต",
    ingredients: [
      {ingredient: "เนยเค็ม", quantity: "70", units: "g"},
      {ingredient: "เกลือ", quantity: "0.125", units: "tsp"},
      {ingredient: "น้ำตาลทราย", quantity: "110", units: "g"},
      {ingredient: "น้ำเลม่อน", quantity: "100", units: "ml"},
      {ingredient: "ผิวเลม่อน", quantity: "2", units: "tbsp"},
      {ingredient: "ไข่แดง", quantity: "3", units: "unit"},
      {ingredient: "ไข่ขาว", quantity: "1", units: "unit"},
    ],
    steps: [
      {
        content: "เตรียมวัตถุดิบ",
        step: [
          "นำผิวเลมอนขูดมาคลุกกับน้ำตาลทรายในอ่างผสมให้เข้ากันดี",
          "ทิ้งไว้ประมาณ 15 นาทีเพื่อให้น้ำมันหอมระเหยจากผิวเลมอนซึมเข้ากับน้ำตาล",
        ],
      },
      {
        content: "ผสมส่วนผสม",
        step: [
          "แยกไข่แดง 3 ฟอง และไข่ขาว 1 ฟองลงในอ่างผสมเดียวกัน",
          "ใส่ผิวเลมอนและน้ำตาลที่คลุกไว้ลงในอ่างผสม",
          "เติมน้ำเลมอนลงไป แล้วคนให้เข้ากัน",
        ],
      },
      {
        content: "ให้ความร้อน",
        step: [
          "ยกอ่างผสมวางบนหม้อน้ำเดือดอ่อนๆ (ตุ๋น)",
          "ใช้ตะกร้อคนส่วนผสมอย่างต่อเนื่องเพื่อป้องกันการเกิดเป็นก้อน",
          "คนจนส่วนผสมเริ่มข้นขึ้น (ใช้เวลาประมาณ 10-15 นาที)",
          "ใส่เนยจืดหั่นเป็นชิ้นเล็กๆ ลงไปในส่วนผสม คนจนเนยละลายและเข้ากันดีกับส่วนผสม",
        ],
      },
    ],
  },
  {
    name: "ซอสมะพร้าว",
    slug: "coconut-sauce",
    date: new Date("2024-06-03").toDateString(),
    description: "ลาวามะพร้าวอ่อน หวานมัน รสชาติกลมกล่อม",
    ingredients: [
      {ingredient: "น้ำมะพร้าว", quantity: "200", units: "g"},
      {ingredient: "กะทิ", quantity: "100", units: "g"},
      {ingredient: "น้ำตาล", quantity: "30", units: "g"},
      {ingredient: "แป้งกวนใส้", quantity: "10", units: "g"},
      {ingredient: "เนยเค็ม", quantity: "10", units: "g"},
      {ingredient: "เนื้อมะพร้าว", quantity: "300", units: "g"},
    ],
    steps: [
      {
        content:
          "นำน้ำมะพร้าว กะทิ และน้ำตาลทรายใส่ลงในหม้อ คนให้เข้ากัน ชิมรสได้ตามชอบ ตัดรสด้วยเกลือเล็กน้อยหากต้องการ",
      },
      {
        content:
          "ใส่แป้งข้าวโพด คนให้แป้งละลาย นำขึ้นตั้งไฟปานกลางค่อนข้างอ่อน คนตลอดเวลาเพื่อไม่ให้ไหม้ก้นหม้อ คนจนซอสข้น จากนั้นใส่เนื้อมะพร้าวอ่อน",
      },
      {content: "คนให้เข้ากัน รอเดือดเล็กน้อยแล้วปิดไฟ พักให้เย็น"},
    ],
  },
  {
    name: "นมชมพู (นม)",
    slug: "pink-milk-milk",
    date: new Date("2024-08-18").toDateString(),
    description:
      "นมชมพูแบบดั้งเดิมที่ใช้ส่วนผสมนมเป็นหลัก ให้รสชาติหอมหวานและเข้มข้น",
    ingredients: [
      {ingredient: "น้ำเปล่า", quantity: "1000", units: "ml"},
      {ingredient: "น้ำแดง เฮลบลูบอย", quantity: "200", units: "ml"},
      {ingredient: "นมข้นจืด ส่วนที่ 1", quantity: "80", units: "g"},
      {ingredient: "นมข้นจืด ส่วนที่ 2", quantity: "405", units: "g"},
      {ingredient: "นมข้นหวาน", quantity: "115", units: "g"},
    ],
    steps: [
      {content: "ต้มน้ำเปล่าให้เดือด"},
      {
        content: "เติมน้ำแดงขณะน้ำเดือด",
        step: [
          "ยังไม่ต้องปิดไฟ",
          "ต้มต่อจนน้ำเดือดอีกรอบ",
          "เมื่อเดือดแล้ว ปิดไฟ",
        ],
      },
      {content: "ใส่นมข้นจืด ส่วนที่ 1", step: ["ผสมจนเข้ากันดี"]},
      {content: "เติมนมข้นหวาน", step: ["ผสมจนเข้ากันดี"]},
      {content: "ใส่นมข้นจืด ส่วนที่ 2", step: ["ผสมจนเข้ากันดี"]},
    ],
  },
  {
    name: "นมชมพู (ครีม)",
    slug: "pink-milk-cream",
    date: new Date("2024-08-18").toDateString(),
    description:
      "นมชมพูสูตรพิเศษที่ใช้ครีมเทียมเป็นส่วนผสม ให้ความหอมมันและเนื้อสัมผัสที่นุ่มนวล",
    ingredients: [
      {ingredient: "น้ำเปล่า", quantity: "1000", units: "ml"},
      {ingredient: "น้ำแดง เฮลบลูบอย", quantity: "200", units: "ml"},
      {ingredient: "ครีมเทียม", quantity: "60", units: "g"},
      {ingredient: "นมข้นจืด", quantity: "405", units: "g"},
      {ingredient: "นมข้นหวาน", quantity: "115", units: "g"},
    ],
    steps: [
      {content: "ต้มน้ำเปล่าให้เดือด"},
      {
        content: "เติมน้ำแดงขณะน้ำเดือด",
        step: [
          "ยังไม่ต้องปิดไฟ",
          "ต้มต่อจนน้ำเดือดอีกรอบ",
          "เมื่อเดือดแล้ว ปิดไฟ",
        ],
      },
      {content: "ใส่ครีมเทียม", step: ["ผสมจนเข้ากันดี"]},
      {content: "เติมนมข้นหวาน", step: ["ผสมจนเข้ากันดี"]},
      {content: "ใส่นมข้นจืด", step: ["ผสมจนเข้ากันดี"]},
    ],
  },
];
