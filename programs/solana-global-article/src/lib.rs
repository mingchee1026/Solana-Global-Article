use anchor_lang::prelude::*;

// This is your program's public key and it will update
// automatically when you build the project.
declare_id!("CePhpmcNQw2jhYrs4Vvp9JRiwg9VfU5CJ1oJWoY1nqfw");

#[program]
pub mod solana_global_article {
    use super::*;
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // get the article
        let article_account = &mut ctx.accounts.article;
        // initializ the variables
        article_account.content = ("").to_string();

        Ok(())
    }

    pub fn write_into_article(ctx: Context<WriteIntoArticle>, three_words: String) -> Result<()> {
        let article = &mut ctx.accounts.article;
        let split_iterator = three_words.trim().split(" ");
    
        let mut final_words = Vec::new();
        let mut counter_added = 0;
    
        for s in split_iterator {
            if s.trim().is_empty() {
                continue;
            }
    
            if s.trim().len() >= 15 {
                return err!(Errors::WordTooLong);
            }
    
            final_words.push(s);
            counter_added += 1;
    
            if counter_added >= 3 {
                break;
            }
        }

        // Join the 3 words after removing spaces
        let mut joined_words = final_words.join(" ");
        // Add a space at the end with this
        joined_words.push_str(" ");
        // Article content gets immediately updated
        article.content.push_str(&joined_words);
    
        Ok(())
    }

    pub fn reset_article(ctx: Context<ResetArticle>) -> Result<()> {
        let article = &mut ctx.accounts.article;
        // reset the variables
        article.content = ("").to_string();
    
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // We must specify the space in order to initialize an account.
    // First 8 bytes are default account discriminator,
    // next 8 bytes come from NewAccount.data being type u64.
    // (u64 = 64 bits unsigned integer = 8 bytes)
    #[account(init, payer = signer, space = 8 + 8 + 10000)]
    pub article: Account<'info, Article>,
    #[account(mut)]
    pub signer: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WriteIntoArticle<'info> {
    //here goes the info that you want to modify like this
    #[account(mut)]
    pub article: Account<'info, Article>,
}

#[derive(Accounts)]
pub struct ResetArticle<'info> {
    //here goes the info that you want to modify like this
    #[account(mut)]
    pub article: Account<'info, Article>,
}

#[account]
pub struct Article {
    pub content: String,
}

#[error_code]
pub enum Errors {
    #[msg("Each word must be less than 15 characters")]
    WordTooLong,
}
