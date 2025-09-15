import { useEffect, useState } from 'react';

interface DepartmentMember {
    id: number;
    name: string;
    position: string;
    is_leader: boolean;
    order_no: number;
}

interface Department {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    order_no: number;
    parent_id?: number;
    members: DepartmentMember[];
    children?: Department[];
}

interface DepartmentStructureProps {
    departments: Department[];
}

const DepartmentStructure = ({ departments }: DepartmentStructureProps) => {
    const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
    const [expandedDepartments, setExpandedDepartments] = useState<number[]>([]);
    const [allDepartments, setAllDepartments] = useState<Department[]>([]);

    useEffect(() => {
        const flattenDepartments = (depts: Department[]): Department[] => {
            let flatList: Department[] = [];

            depts.forEach((dept) => {
                flatList.push(dept);
                if (dept.children && dept.children.length > 0) {
                    flatList = [...flatList, ...flattenDepartments(dept.children)];
                }
            });

            return flatList;
        };

        setAllDepartments(flattenDepartments(departments));
    }, [departments]);

    const toggleAccordion = (id: number) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

    const toggleExpandDepartment = (departmentId: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedDepartments((prev) => (prev.includes(departmentId) ? prev.filter((id) => id !== departmentId) : [...prev, departmentId]));
    };

    // Recursive function to render department tree for mobile
    const renderDepartmentTreeMobile = (department: Department, level = 0) => {
        const leaders = department.members.filter((member) => member.is_leader);
        const regularMembers = department.members.filter((member) => !member.is_leader);
        const hasChildren = department.children && department.children.length > 0;
        const isExpanded = expandedDepartments.includes(department.id);
        const isActive = activeAccordion === department.id;

        return (
            <div key={department.id} className={`mb-3 ${level > 0 ? 'ml-6 border-l-2 border-primary/20 pl-4' : ''}`}>
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                    <button className="flex w-full items-center justify-between p-4 text-left" onClick={() => toggleAccordion(department.id)}>
                        <div className="flex items-center">
                            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                <i className={`fas ${department.icon} text-primary`}></i>
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-primary">{department.title}</h4>
                                <p className="text-sm text-gray-600">{department.subtitle}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {hasChildren && (
                                <div
                                    onClick={(e) => toggleExpandDepartment(department.id, e)}
                                    className="mr-2 cursor-pointer rounded p-1 hover:bg-gray-200"
                                >
                                    <i className={`fas fa-${isExpanded ? 'minus' : 'plus'} text-sm text-primary`}></i>
                                </div>
                            )}
                            <i
                                className={`fas fa-chevron-down text-primary transition-transform duration-300 ${isActive ? 'rotate-180 transform' : ''}`}
                            ></i>
                        </div>
                    </button>

                    <div className={`${isActive ? 'block' : 'hidden'} px-4 pb-4`}>
                        <div className="border-l-2 border-primary/30 pl-4">
                            <p className="mb-3 text-gray-700">{department.description}</p>

                            {/* Display leaders if any */}
                            {leaders.length > 0 && (
                                <div className="mb-3 rounded-lg border border-gray-200 bg-white p-3">
                                    <p className="mb-1 font-medium text-primary">{leaders.length === 1 ? 'Department Head:' : 'Department Heads:'}</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        {leaders
                                            .sort((a, b) => a.order_no - b.order_no)
                                            .map((member) => (
                                                <li key={member.id}>
                                                    • {member.name} - {member.position}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}

                            {/* Display regular team members if any */}
                            {regularMembers.length > 0 && (
                                <div className="rounded-lg border border-gray-200 bg-white p-3">
                                    <p className="mb-1 font-medium text-primary">Team Members:</p>
                                    <ul className="space-y-1 text-sm text-gray-700">
                                        {regularMembers
                                            .sort((a, b) => a.order_no - b.order_no)
                                            .map((member) => (
                                                <li key={member.id}>
                                                    • {member.name} - {member.position}
                                                </li>
                                            ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Render children if expanded */}
                {hasChildren && isExpanded && (
                    <div className="mt-3">{department.children!.map((child) => renderDepartmentTreeMobile(child, level + 1))}</div>
                )}
            </div>
        );
    };

    // Find parent department by ID
    const findParentDepartment = (parentId: number): Department | null => {
        return allDepartments.find((dept) => dept.id === parentId) || null;
    };

    const renderDepartmentTreePC = (department: Department, level = 0) => {
        const leaders = department.members.filter((member) => member.is_leader);
        const regularMembers = department.members.filter((member) => !member.is_leader);
        const hasChildren = department.children && department.children.length > 0;
        const parentDepartment = department.parent_id ? findParentDepartment(department.parent_id) : null;

        return (
            <div key={department.id} className="relative flex flex-col items-center">
                {/* Department card with fixed width */}
                <div
                    className={`official-card relative z-10 mt-5 rounded-xl border border-gray-200 bg-white p-5 text-center shadow-md transition-all hover:shadow-lg ${level > 0 ? 'mt-4' : ''}`}
                    style={{ width: '320px' }}
                >
                    {/* Large Pin Icon on top-left */}
                    <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-secondary shadow-md">
                        <i className="fas fa-thumbtack rotate-45 text-lg text-white"></i>
                    </div>
                    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <i className={`fas ${department.icon} text-xl text-primary`}></i>
                    </div>

                    <h4 className="mb-1 text-lg font-bold text-primary">{department.title}</h4>
                    <p className="mb-2 text-sm text-gray-600">{department.subtitle}</p>
                    <p className="mb-3 line-clamp-2 text-sm text-gray-700">{department.description}</p>

                    {/* Display parent department if exists */}
                    {parentDepartment && (
                        <div className="mb-3 border-t border-gray-200 pt-3">
                            <p className="flex items-center justify-center text-xs text-gray-500">
                                <i className="fas fa-level-up-alt mr-1 rotate-90"></i>
                                Part of {parentDepartment.title}
                            </p>
                        </div>
                    )}

                    {/* Display leaders if any */}
                    {leaders.length > 0 && (
                        <div className="mb-3 border-t border-gray-200 pt-3">
                            <p className="mb-1 flex items-center justify-center text-sm font-medium text-primary">
                                <i className="fas fa-crown mr-1 text-xs"></i>
                                {leaders.length === 1 ? 'Head' : 'Heads'}
                            </p>
                            <ul className="space-y-1 text-xs text-gray-700">
                                {leaders
                                    .sort((a, b) => a.order_no - b.order_no)
                                    .map((member) => (
                                        <li key={member.id} className="flex items-center justify-between rounded px-1 py-0.5 hover:bg-gray-50">
                                            <span className="flex items-center">
                                                <span className="mr-2 h-2 w-2 rounded-full bg-primary/40"></span>
                                                {member.name}
                                            </span>
                                            <span className="text-xs text-gray-500">{member.position}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}

                    {/* Display regular team members if any */}
                    {regularMembers.length > 0 && (
                        <div className="border-t border-gray-200 pt-3">
                            <p className="mb-1 flex items-center justify-center text-sm font-medium text-primary">
                                <i className="fas fa-users mr-1 text-xs"></i>
                                Team Members
                            </p>
                            <ul className="space-y-1 text-xs text-gray-700">
                                {regularMembers
                                    .sort((a, b) => a.order_no - b.order_no)
                                    .map((member) => (
                                        <li key={member.id} className="flex items-center justify-between rounded px-1 py-0.5 hover:bg-gray-50">
                                            <span className="flex items-center">
                                                <span className="mr-2 h-2 w-2 rounded-full bg-gray-300"></span>
                                                {member.name}
                                            </span>
                                            <span className="text-xs text-gray-500">{member.position}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}

                    {/* Show indicator if department has children */}
                    {hasChildren && (
                        <div className="mt-3 border-t border-gray-200 pt-3">
                            <p className="flex items-center justify-center text-xs font-medium text-primary">
                                <i className="fas fa-sitemap mr-1"></i>
                                {department.children!.length} sub-department{department.children!.length !== 1 ? 's' : ''}
                            </p>
                        </div>
                    )}
                </div>

                {/* Children container - Only for immediate children */}
                {hasChildren && (
                    <div className="relative mt-6 flex justify-center">
                        {/* Main vertical connector from parent to horizontal line */}
                        <div className="absolute -top-4 left-1/2 h-6 -translate-x-1/2 transform border-l border-dashed border-primary"></div>

                        {/* Horizontal connector line spanning all children (only if > 1 child) */}
                        {department.children!.length > 1 && (
                            <div className="absolute top-2 right-0 left-0 flex justify-center">
                                <div className="h-0.5 w-full max-w-[calc(100%-3rem)] border-t border-dashed border-primary"></div>
                            </div>
                        )}

                        {/* Children with individual vertical connectors */}
                        <div className="relative mt-8 flex w-full flex-wrap justify-center gap-6">
                            {department.children!.map((child) => (
                                <div key={child.id} className="relative flex justify-center">
                                    {/* Individual vertical connector */}
                                    <div className="absolute -top-6 left-1/2 h-6 -translate-x-1/2 transform border-l border-dashed border-primary"></div>

                                    {renderDepartmentTreePC(child, level + 1)}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            {/* Mobile Accordion View with Hierarchy */}
            <div className="space-y-4 lg:hidden">{departments.map((department) => renderDepartmentTreeMobile(department))}</div>

            {/* Desktop Tree View */}
            <div className="hidden lg:block">
                <div className="flex justify-center">
                    <div className="tree-container">
                        {departments.map((department) => (
                            <div key={department.id} className="relative">
                                {renderDepartmentTreePC(department, 0)}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-12 text-center">
                <div className="inline-block max-w-2xl rounded-xl bg-primary/5 p-6">
                    <h4 className="mb-2 text-lg font-bold text-primary">Need to contact a specific department?</h4>
                    <p className="mb-4 text-gray-700">Reach out to our tourism office for inquiries and assistance</p>
                    <a href="#" className="inline-flex items-center rounded-full bg-primary px-6 py-2 text-white transition hover:bg-primary/90">
                        <i className="fas fa-envelope mr-2"></i> Contact Tourism Office
                    </a>
                </div>
            </div>

            <style>{`
                .tree-container {
                    position: relative;
                    padding: 20px 0;
                }
                
                @media (min-width: 1024px) {
                    .official-card {
                        min-width: 280px;
                        max-width: 320px;
                    }
                }
            `}</style>
        </div>
    );
};

export default DepartmentStructure;
