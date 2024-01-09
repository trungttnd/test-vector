use anchor_lang::prelude::*;

declare_id!("5PmsLUaWNKBdayAMGFGC6MY8FZ5QmFLW3JwpeYD5jNMN");

#[program]
pub mod dapp_starter {
    use super::*;
    pub fn initialize(_ctx: Context<Initialize>) -> ProgramResult {
        Ok(())
    }

    pub fn increment(ctx: Context<Increment>) -> ProgramResult {
        let config = &mut ctx.accounts.config;
        config.count += 1;
        Ok(())
    }
    //create round
    pub fn create_round(
        _ctx: Context<CreateRound>,
        round_id: u32
    ) -> ProgramResult {
        let config = &mut _ctx.accounts.config;
        let round = &mut _ctx.accounts.round;
        let clock: Clock = Clock::get()?;

        config.count += 1;
        round.id = config.count;
        round.updated_at = clock.unix_timestamp;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info>{
    #[account(
        init, 
        payer = deployer, 
        space = 8 + 8,
    )]
    pub config: Account<'info, Counter>,

    #[account(mut)]
    pub deployer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct Increment<'info>{
    #[account(
        mut
    )]
    pub config: Account<'info, Counter>,

    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct Counter {
    pub count: u32,
}

#[derive(Accounts)]
#[instruction(round_id: u32)]
pub struct CreateRound<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,
    #[account(
        init,
        payer = payer,
        space = 8 + 4 + 1 + 1 + 4 + 8 + 8 + 1 + 8 + 8 + 8 + 8 + 1 + 1000 * (4 + 4 + 1 + 32 + 1 + 8 + 8 + 8 + 8),
        seeds = ["round".as_bytes(), &round_id.to_le_bytes()],
        bump,
    )]
    pub round: Account<'info, Round>,
    #[account(mut)]
    pub config: Account<'info, Counter>, 
    pub system_program: Program<'info, System>,
}

#[account]
pub struct Round {
    pub id: u32, //4
    pub drawn: bool,//1
    pub closed: bool,//1
    pub last_ticket_id: u32,//4
    pub winning_number: u64,//8
    pub bet_amount: u64,//8
    pub waiting_time: u8,//1
    pub created_at: i64,//8
    pub updated_at: i64,//8
    pub small_total_amount: u64,
    pub big_total_amount: u64,
    pub bet_result: u8,
    pub tickets: Vec<Ticket>
}

#[account]
pub struct Ticket {
    pub id: u32,
    pub round_id: u32,
    pub claimed: bool,
    pub authority: Pubkey,
    pub bet_value: u8,
    pub bet_amount: u64,
    pub unaccepted_amount: u64,
    pub created_at: i64,
    pub win_amount: u64,
}
