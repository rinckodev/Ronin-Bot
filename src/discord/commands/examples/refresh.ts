import { Command } from "@/discord/base";
import { hexToRgb, sleep } from "@/functions";
import { settings } from "@/settings";
import { ApplicationCommandType, EmbedBuilder, formatEmoji } from "discord.js";

export default new Command({
    name: "refresh",
    description: "refresh",
    dmPermission: false,
    type: ApplicationCommandType.ChatInput,
    async run({ interaction }){
        
        const refreshEmoji = formatEmoji(settings.emojis.animated.refresh, true);

        await interaction.reply({
            embeds: [new EmbedBuilder({
                color: hexToRgb(settings.colors.theme.primary),
                description: `${refreshEmoji} Atualizando dados...`
            })],
        });

        await sleep(4000);

        const successEmoji = formatEmoji(settings.emojis.static.check);

        interaction.editReply({
            embeds: [new EmbedBuilder({
                color: hexToRgb(settings.colors.theme.success),
                description: `${successEmoji} Dados atualizados com sucesso!`
            })],
        });

    }
});