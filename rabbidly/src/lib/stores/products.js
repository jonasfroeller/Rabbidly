// @ts-nocheck
import { readable, writable } from 'svelte/store'

import ipad from '$image/IPad-3.png'
import tablet from '$image/Tablet-3.png'
import keyboard from '$image/Keyboard-3.png'
import laptop from '$image/Laptop-3.png'
import mouse from '$image/mouse-3.png'
import iphone from '$image/Phone-3.png'

// quantity: 1,
export const products = readable([
	{
		id: 2312,
		category: 'technology',
		rating: 4,
		price: 22,
		name: 'IPad',
		content:
			"Introducing the latest addition to the iPad lineup - the sleek and powerful iPad. With its large, high-resolution display, lightning-fast performance, and versatile capabilities, this iPad is the ultimate device for work and play. Whether you're creating and editing documents, streaming movies and TV shows, or exploring the latest games and apps, this iPad makes it all possible. With its advanced camera and video capabilities, you can capture stunning photos and videos, and with the Touch ID fingerprint sensor, you can easily and securely unlock your iPad. With all-day battery life, you can stay connected and productive all day long. This iPad is the perfect device for anyone who wants to do more, see more, and experience more.",
		images: [ipad, tablet],
		saved: false
	},
	{
		id: 21334,
		category: 'technology',
		rating: 5,
		price: 3123,
		name: 'Keyboard',
		content:
			"Introducing the ultimate typing experience - the new keyboard. This keyboard is designed for maximum comfort and efficiency, with its low-profile, responsive keys that provide a satisfying tactile feedback. The keyboard is equipped with customizable backlighting, so you can type comfortably in any lighting conditions. The durable construction and spill-resistant design ensure that your keyboard will last for years to come. It also features multi-language support and multimedia keys that give you easy access to your favorite shortcuts. Whether you're working on a document, chatting with friends, or playing your favorite game, this keyboard will enhance your productivity and make your typing experience more enjoyable.",
		images: [keyboard],
		saved: false
	},
	{
		id: 5344354,
		category: 'technology',
		rating: 4,
		price: 300,
		name: 'Laptop',
		content:
			"Introducing the ultimate portable powerhouse - the new laptop. With its sleek and lightweight design, this laptop is perfect for on-the-go professionals and students. Equipped with the latest technology, this laptop delivers lightning-fast performance, with a powerful processor, ample storage, and high-speed memory. The high-resolution display provides stunning visuals, making it perfect for streaming, gaming, and video editing. The long-lasting battery ensures you can work and play all day without needing to plug in. The backlit keyboard and precision touchpad provide a comfortable and accurate typing experience. The laptop also has a fingerprint sensor for added security and convenience. Whether you're working on a presentation, streaming a movie, or playing games, this laptop is built to handle it all.",
		images: [laptop],
		saved: false
	},
	{
		id: 6456453,
		category: 'technology',
		rating: 5,
		price: 600,
		name: 'Computer Mouse',
		content:
			"Introducing the new computer mouse - the perfect addition to your desktop setup. This mouse features a sleek and ergonomic design that fits comfortably in your hand, reducing hand fatigue and providing a natural grip. The high-precision sensor tracks smoothly on almost any surface, and the adjustable DPI switch allows you to adjust the cursor speed to your liking. The mouse also features customizable buttons and programmable macros, giving you quick access to your most-used commands and shortcuts. With its durable construction and convenient plug-and-play design, this mouse is the perfect choice for anyone who wants a reliable and customizable cursor control. Whether you're working, gaming, or just browsing, this mouse will enhance your desktop experience.",
		images: [mouse],
		saved: false
	},
	{
		id: 2343432,
		category: 'technology',
		rating: 4,
		price: 600,
		name: 'Phone',
		content:
			'Introducing the latest iPhone - the ultimate device for capturing, communicating, and creating. With its stunning OLED display, powerful A-series chip, and advanced camera system, this iPhone is designed to help you capture and share your world like never before. The dual-camera system with 12MP ultra-wide and wide lenses allows you to take stunning photos and videos, even in low light. The A-series chip ensures lightning-fast performance and improved battery life, allowing you to stay connected and productive all day. The Face ID technology and Touch ID provide secure and convenient ways to unlock your device. With its sleek and durable design, this iPhone is built to handle all of your daily tasks and more. It is perfect for anyone who wants a device that can keep up with their fast-paced life.',
		images: [iphone],
		saved: false
	},
	{
		id: 2222222,
		category: 'cases',
		rating: 1,
		price: 22,
		name: 'Case',
		content:
			"Introducing the ultimate phone protection - the invisible case. This case is designed to be completely transparent and undetectable, making it the perfect solution for those who want to protect their phone without altering its appearance. Its advanced technology provides superior drop and impact protection while remaining slim and lightweight. The case is also designed with easy access to all ports, buttons, and cameras. It's made of durable and flexible material that keeps your phone safe from scratches, dings, and minor drops. The invisible case is the perfect accessory for anyone who wants to protect their phone while keeping its original design. With this case, you can have peace of mind knowing that your phone is protected without compromising its aesthetic.",
		images: [],
		saved: false
	}
])

export const productAmount = readable(products.length)

export const productsFiltered = writable([])
