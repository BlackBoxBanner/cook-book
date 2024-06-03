import { Ingredient } from "@/components/basic/recipe";

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
			"เลมอนเคิร์ด เป็นซอสลักษณะคล้ายคัสตาร์ด มีรสชาติออกเปรี้ยวหวานมีกลิ่นหอมอ่อนๆของเลมอนเป็นหลัก นิยมนำไปใช้ทาขนมปัง, แครกเกอร์ หรือเอาไปเป็นส่วนประกอบของขนมอื่นๆ เช่น คุกกี้ พายหรือทาร์ต",
		ingredients: [
			{ ingredient: "เนยเค็ม", quantity: "70", units: "g" },
			{ ingredient: "เกลือ", quantity: "0.125", units: "tsp" },
			{ ingredient: "น้ำตาลทราย", quantity: "110", units: "g" },
			{ ingredient: "น้ำเลม่อน", quantity: "100", units: "ml" },
			{ ingredient: "ผิวเลม่อน", quantity: "2", units: "tbsp" },
			{ ingredient: "ไข่แดง", quantity: "3", units: "unit" },
			{ ingredient: "ไข่ขาว", quantity: "1", units: "unit" },
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
					"แยกไข่แดง 3 ฟอง และไข่ขาว 1 ฟองลงในอ่างผสมเดียวกัน (ตามสูตร)",
					"ใส่ผิวเลมอนและน้ำตาลที่คลุกไว้ลงในอ่างผสมที่มีไข่",
					"เติมน้ำเลมอนลงไป แล้วคนให้เข้ากัน",
				],
			},
			{
				content: "ให้ความร้อน",
				step: [
					"ยกอ่างผสมวางบนหม้อน้ำเดือดอ่อนๆ (ทำการตุ๋น)",
					"ใช้ตะกร้อคนส่วนผสมอย่างต่อเนื่อง เพื่อป้องกันการเกิดเป็นก้อน",
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
		description: "ลาวามะพร้าวอ่อน",
		ingredients: [
			{ ingredient: "น้ำมะพร้าว", quantity: "200", units: "g" },
			{ ingredient: "กะทิ", quantity: "100", units: "g" },
			{ ingredient: "น้ำตาล", quantity: "30", units: "g" },
			{ ingredient: "แป้งกวนใส้", quantity: "10", units: "g" },
			{ ingredient: "เนยเค็ม", quantity: "10", units: "g" },
			{ ingredient: "เนื้อมะพร้าว", quantity: "300", units: "g" },
		],
		steps: [
			{
				content:
					"นำน้ำมะพร้าว กะทิ และน้ำตาลทราย ใส่ลงในหม้อ คนให้เข้ากัน (ขั้นตอนนี้ชิมรสได้ตามชอบ จะตัดรสด้วยเกลือนิดหน่อยก็ได้)",
			},
			{
				content:
					"ใส่แป้งข้าวโพด คนให้แป้งละลาย นำขึ้นตั้งไฟปานกลางค่อนข้างอ่อน ระหว่างตั้งไฟให้คนตลอดค่ะ เดี๋ยวจะไหม้ก้นหม้อ คนจนซอสข้น หลังจากนั้นใส่เนื้อมะพร้าวอ่อน",
			},
			{ content: "คนให้เข้ากัน รอเดือดนิดหน่อยแล้วปิดไฟ พักให้เย็น" },
		],
	},
];
