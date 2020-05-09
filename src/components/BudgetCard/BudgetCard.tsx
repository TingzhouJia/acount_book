import React from 'react'
import './bugetCard.css'
import CircleCard from 'components/Charts/circle'
const BudgetCard: React.FC = () => {
    return (
        <div className="budgetCard">
            <div className="budget_card_title">
                <span>Utilities</span>
                <div className="budget_card_content">
                    <span>${2000}</span>
                </div>
            </div>
            <CircleCard />
        </div>
    )
}
export default BudgetCard;


