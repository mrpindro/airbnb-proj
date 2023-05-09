'use client';
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { 
    GiBarn,
    GiBoatFishing, 
    GiCactus, 
    GiCastle, 
    GiCaveEntrance, 
    GiForestCamp, 
    GiIsland, 
    GiWindmill 
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import Container from "../Container";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'this property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'this property has windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'this property is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'this property is in countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'this property has a pool'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'this property is on an Island'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'this property is close to a lake'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'this property has skiing activities'
    },
    {
        label: 'Castle',
        icon: GiCastle,
        description: 'this property is a castle'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'this property has camping activities'
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description: 'this property is in the Artic'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'this property is in a cave'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'this property is in the desert'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'this property has a barn'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'this property is luxurious'
    },
]

const Categories = ()=>{
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();

    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }
    return (
        <Container>
            <div
                className="pt-4 flex flex-row items-center justify-between overflow-x-auto"
            >
                {categories.map((item)=>
                    <CategoryBox 
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                )}
            </div>
        </Container>
    );
}

export default Categories;